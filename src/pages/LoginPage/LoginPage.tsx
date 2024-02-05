import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import './LoginPage.css';
import Form from '@components/Form/Form';

const LoginPage = () => {
  return (
    <div className="login">
      <Form>
        <Input>Логин</Input>
        <Input type='password'>Пароль</Input>
        <Button>Войти</Button>
      </Form>
    </div>
  )
}

export default LoginPage;
