import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import Form from '@components/Form/Form';
import Header from '@components/Header/Header';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login">
        <Form>
          <Input>Логин</Input>
          <Input type='password'>Пароль</Input>
          <Button>Войти</Button>
        </Form>
      </div>
    </>
  )
}

export default LoginPage;
