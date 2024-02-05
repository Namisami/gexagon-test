import Input from '@components/Input/Input';
import Button from '@components/Input/Button/Button';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <form className='signup'>
      <Input>Логин</Input>
      <Input type='password'>Пароль</Input>
      <Button>Зарегистрироваться</Button>
    </form>
  )
}

export default SignupPage;
