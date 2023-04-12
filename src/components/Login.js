import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleInputPassword = e => { setPassword(e.target.value) };
  const handleInputEmail = e => { setEmail(e.target.value) };
  const handleSubmit = e => {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <section className='sing'>
      <h3 className='sing__title'>Вход</h3>
      <form className='sing__form' onSubmit={handleSubmit}>
        <input className='sing__input' id="log-email" type='email' placeholder='Email' value={email} onChange={handleInputEmail} required autocomplete="off"></input>
        <input className='sing__input' id="log-password" type='password' placeholder='Пароль' value={password} onChange={handleInputPassword} required autocomplete="off"></input>
        <button className='sing__submit-button'>Войти</button>
      </form>
    </section>
  );
}

