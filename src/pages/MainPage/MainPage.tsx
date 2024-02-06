import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import Form from '@components/Form/Form';
import Header from '@components/Header/Header';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className='main-page'>
        <Form className='main-page__link-transform'>
          <Input placeholder='Введите полную ссылку'>Полная ссылка</Input>
          <Button>Применить</Button>
        </Form>
        <section className='main-page__links'>
          <h1>Список ссылок</h1>
        </section>
      </div>
    </>
  )
}

export default MainPage;
