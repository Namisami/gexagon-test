import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import Form from '@components/Form/Form';
import Header from '@components/Header/Header';
import axiosInstance from '@api/hexagon';
import './MainPage.css';

export interface TableDataI {
  order: string | null
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
    order: null,
    offset: 0,
    limit: 10,
    count: 10,
    data: []
  })

  const navigate = useNavigate();

  const fetchData = async () => {
    await axiosInstance
      .get('/api/statistics', {
        params: {
          order: tableData.order,
          offset: tableData.offset,
          limit: tableData.limit
        }
      })
      .then(res => {
        setTableData({...tableData, data: res.data, count: res.headers['x-total-count']});
      })
      .catch(err => {
        if (err.response.status === 401) {
          window.localStorage.removeItem('access_token');
          navigate('/login');
        }
      })
  }

  useEffect(() => {
    fetchData();
  }, [tableData.offset, tableData.order])

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

  const orderChangeShort = () => {
    if (tableData.order === 'asc_short') {
      return setTableData({...tableData, order: 'desc_short'})
    }
    return setTableData({...tableData, order: 'asc_short'})
  }
  const orderChangeTarget = () => {
    if (tableData.order === 'asc_target') {
      return setTableData({...tableData, order: 'desc_target'})
    }
    return setTableData({...tableData, order: 'asc_target'})
  }
  const orderChangeCounter = () => {
    if (tableData.order === 'asc_counter') {
      return setTableData({...tableData, order: 'desc_counter'})
    }
    return setTableData({...tableData, order: 'asc_counter'})
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
            <div className="table__ceil table__ceil--sort table__short" onClick={ orderChangeShort }>{ tableData.order === 'asc_short' ? 'По возрастанию' : tableData.order === 'desc_short' ? 'По убыванию' : 'Без сортировки'}</div>
            <div className="table__ceil table__ceil--sort table__initial" onClick={ orderChangeTarget }>{ tableData.order === 'asc_target' ? 'По возрастанию' : tableData.order === 'desc_target' ? 'По убыванию' : 'Без сортировки'}</div>
            <div className="table__ceil table__ceil--sort table__count" onClick={ orderChangeCounter }>{ tableData.order === 'asc_counter' ? 'По возрастанию' : tableData.order === 'desc_counter' ? 'По убыванию' : 'Без сортировки'}</div>
            <div className="table__ceil table__ceil--header table__short">Короткая ссылка</div>
            <div className="table__ceil table__ceil--header table__initial">Полная ссылка</div>
            <div className="table__ceil table__ceil--header table__count">Переходов</div>
            { tableData.data.map((item) => {
              return (
                <React.Fragment key={ item.id }>
                  <div className="table__ceil table__short">
                    <a href={ `https://front-test.hex.team/s/${item.short}` } className="table__link">
                      { `https://front-test.hex.team/s/${item.short}` }
                    </a>
                  </div>
                  <div className="table__ceil table__initial">
                    <a className="table__link" href={ item.target }>
                      { item.target }
                    </a>
                  </div>
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
