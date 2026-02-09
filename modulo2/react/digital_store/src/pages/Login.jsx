import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import 'primeflex/primeflex.css';
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div style={{ height: '100vh' }}>
      <div style={{ width: '300px' }}>
        <h3>Seja Bem-vindo</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label> 
            <InputText 
                id="email" 
                type="email" 
                placeholder="email@domain.com" 
            />
          </div>
            <div>
                <label htmlFor="password">Senha</label> 
                <IconField>
                    <InputIcon className="pi pi-eye"> </InputIcon>
                    <InputText 
                        id='password'
                        placeholder='********'
                    />
                </IconField>
            </div>
          <Button type="submit" label="Entrar" />
        </form>
      </div>
    </div>
  );
};
export default Login;