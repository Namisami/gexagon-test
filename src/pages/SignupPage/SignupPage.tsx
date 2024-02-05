import Input from '@components/Input/Input';
import './SignupPage.css';
import Button from '@components/Input/Button/Button';

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
