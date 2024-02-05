import Input from '@components/Input/Input';
import Button from '@components/Input/Button/Button';
import Form from '@components/Input/Form/Form';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className='main-page'>
      <Form className='main-page__link-transform'>
        <Input placeholder='Введите полную ссылку'>Полная ссылка</Input>
        <Button>Применить</Button>
      </Form>
    </div>
  )
}

export default MainPage;
