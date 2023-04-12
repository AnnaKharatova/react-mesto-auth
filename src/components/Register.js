import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Register({onRegister}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleInputPasswordInput = e => { setPassword(e.target.value) };
  const handleInputEmail = e => { setEmail(e.target.value) };
  const handleSubmit = e => {
    e.preventDefault();
    onRegister(email, password);
  };

    return (
      <section className='sing'>
        <h3 className='sing__title'>Регистрация</h3>
        <form className='sing__form' onSubmit={handleSubmit}>
          <input className='sing__input' type='email' placeholder='Email' value={email} onChange={handleInputEmail} required></input>
          <input className='sing__input' type='password' placeholder='Пароль' value={password} onChange={handleInputPasswordInput} required></input>
          <button className='sing__submit-button'>Зарегистрироваться</button>
          <p className='sing__caption'>Вы уже зарегистрированы?&#8194;
            <Link to='/sing-up' className='sing__link'>Войти</Link>
          </p>
        </form>
      </section>
    );

  }