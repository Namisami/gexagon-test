import Input from '@components/Input/Input';
import Button from '@components/Input/Button/Button';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <form className='login'>
      <Input>Логин</Input>
      <Input type='password'>Пароль</Input>
      <Button>Войти</Button>
    </form>
  )
}

export default LoginPage;
