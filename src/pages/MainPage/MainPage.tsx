import React from 'react';
import { useEffect, useState } from 'react';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import Form from '@components/Form/Form';
import Header from '@components/Header/Header';
import axiosInstance from '@api/hexagon';
import './MainPage.css';

export interface TableDataI {
  offset: number
  limit: number
  count: number
  data: {
    id: number
    short: string,
    target: string,
    counter: number
  }[]
}

const MainPage = () => {
  const [fullLink, setFullLink] = useState('');
  const [tableData, setTableData] = useState<TableDataI>({
    offset: 0,
    limit: 10,
    count: 10,
    data: []
  })

  const fetchData = async () => {
    await axiosInstance
      .get('/api/statistics', {
        params: {
          offset: tableData.offset,
          limit: tableData.limit
        }
      })
      .then(res => {
        setTableData({...tableData, data: res.data, count: res.headers['x-total-count']});
        console.log(res.headers['x-total-count']);
      })
      .catch(err => {
        if (err.response.status === 401 && window.localStorage.getItem('access_token')) {
          window.localStorage.removeItem('access_token');
        }
      })
  }

  useEffect(() => {
    fetchData();
  }, [tableData.offset])

  const squeezeLink = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosInstance
      .post('/api/squeeze', null, {
        params: {
          link: fullLink
        }
      })
      .then(() => fetchData())
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <div className='main-page'>
        <Form className='main-page__link-transform' onFormSubmit={ squeezeLink }>
          <Input placeholder='Введите полную ссылку' onInputChange={ (e) => setFullLink(e.target.value) }>Полная ссылка</Input>
          <Button>Применить</Button>
        </Form>
        <section className='main-page__links'>
          <h1>Список ссылок</h1>
          <div className="main-page__pagination">
            <Button onButtonClick={ () => setTableData({...tableData, offset: tableData.offset - 10}) }>Назад</Button>
            <p className="main-page__offset">{ tableData.offset }-{ tableData.count >= tableData.offset + 10 ? tableData.offset + 10 : tableData.count } из { tableData.count }</p>
            <Button onButtonClick={ () => setTableData({...tableData, offset: tableData.offset + 10}) }>Вперед</Button>
          </div>
          <div className="main-page__table table">
            { tableData.data.map((item) => {
              return (
                <React.Fragment key={ item.id }>
                  <div className="table__ceil table__short">{ item.short }</div>
                  <div className="table__ceil table__initial">{ item.target }</div>
                  <div className="table__ceil table__count">{ item.counter }</div>
                </React.Fragment>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export default MainPage;
