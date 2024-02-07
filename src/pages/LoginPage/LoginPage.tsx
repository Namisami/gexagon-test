import { useState } from 'react';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import Form from '@components/Form/Form';
import Header from '@components/Header/Header';
import axiosInstance from '@api/hexagon';
import './LoginPage.css';

const LoginPage = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  })  
  const [error, setError] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    await axiosInstance
      .post('/api/login', {
        username: state.username,
        password: state.password,
      })
      .then((res) => window.localStorage.setItem('access_token', res.data.access_token))
      .catch((err) => { console.log(err); setError(err) })
  }
  
  return (
    <>
      <Header />
      <div className="login">
        { error && 
          <p>Ошибка</p>
        }
        <Form onFormSubmit={ login }>
          <Input onInputChange={ (e) => setState({...state, username: e.target.value}) }>Логин</Input>
          <Input type='password' onInputChange={ (e) => setState({...state, password: e.target.value}) }>Пароль</Input>
          <Button>Войти</Button>
        </Form>
      </div>
    </>
  )
}

export default LoginPage;
