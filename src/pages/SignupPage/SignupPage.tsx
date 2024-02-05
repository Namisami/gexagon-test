import Input from '@components/Input/Input';
import Button from '@components/Input/Button/Button';
import Form from '@components/Input/Form/Form';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup">
      <Form>
        <Input>Логин</Input>
        <Input type='password'>Пароль</Input>
        <Button>Зарегистрироваться</Button>
      </Form>
    </div>
  )
}

export default SignupPage;
