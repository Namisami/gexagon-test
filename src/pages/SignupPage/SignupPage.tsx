import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import Form from '@components/Form/Form';
import Header from '@components/Header/Header';
import axiosInstance from '@api/hexagon';
import './SignupPage.css';

const SignupPage = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    await axiosInstance
      .post('/api/register', null, {
        params: {
          username: state.username,
          password: state.password,
        }
      })
      .then(() => navigate('/login'))
      .catch((err) => setError(err))
  };

  return (
    <>
      <Header />
      <div className="signup">
        { error && 
          <p>Ошибка</p>
        }
        <Form onFormSubmit={ register }>
          <Input onInputChange={ (e) => setState({...state, username: e.target.value}) }>Логин</Input>
          <Input type='password' onInputChange={ (e) => setState({...state, password: e.target.value}) }>Пароль</Input>
          <Button>Зарегистрироваться</Button>
        </Form>
      </div>
    </>
  )
}

export default SignupPage;
