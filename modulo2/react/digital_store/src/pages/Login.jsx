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
      <div className="bg-green-500 h-screen flex align-items-center justify-content-center">
        <form className="surface-500">
            <h3>Seja Bem-vindo</h3>
            <div>
                <label htmlFor="email" className='block'>Email</label> 
                <InputText 
                    id="email" 
                    type="email"
                    placeholder="email@domain.com" 
                />
            </div>
            <div className="p-mb-2">
                <label htmlFor="password" className='block'>Senha</label> 
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
  );
};
export default Login;