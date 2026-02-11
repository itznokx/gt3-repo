import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import {  useForm } from 'react-hook-form'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


const Login = () => {
  const [showPassword, setPasswordVisibility] = useState(false) 
  const {register, handleSubmit } = useForm();

    function logAux (data){
        console.log(data)
    }

  return (
      <div className="bg-green-500 h-screen flex align-items-center justify-content-center">
        <form className="surface-1000" onSubmit={handleSubmit(logAux)}>
            <h3>Seja Bem-vindo</h3>
            <div>
                <label htmlFor="email" className='block'>Email</label> 
                <InputText 
                    id="email" 
                    type="email"
                    placeholder="email@domain.com"
                    {...register('email', {required: true})}
                />
            </div>
            <div className="p-mb-2">
                <label htmlFor="password" className='block'>Senha</label> 
                <IconField>
                    <InputIcon 
                        className={ `pi ${showPassword ? 'pi-eye-slash' : 'pi-eye'} cursor-pointer`}
                        onClick={ () => setPasswordVisibility(!showPassword)}
                        
                    />
                    <InputText
                        type={showPassword ? 'password' : 'text'}
                        id='password'
                        placeholder='********'
                        {...register('password', {required: true})}
                    />
                </IconField>
            </div>
            <Button type="submit" label="Entrar" />
        </form>
      </div>
  );
};
export default Login;