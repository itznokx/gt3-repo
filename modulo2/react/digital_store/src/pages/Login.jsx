import React, { useContext, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import {  useForm } from 'react-hook-form'
import { ContextAuth } from '../contexts/AuthContext';


const Login = () => {
  const [showPassword, setPasswordVisibility] = useState(false);
  const {register, handleSubmit } = useForm();
  const { setLogged } = useContext(ContextAuth);
  const navigate = useNavigate();

    function logAux (data){
        console.log(data)
        if (data.email == "test@gmail.com" && data.password == "123456"){
            
            setLogged(true)
            navigate('/home')
        }
    }

  return (
      <div>
        <form
            className="bg-white shadow-lg rounded-xl p-8 flex flex-col gap-4" 
            onSubmit={handleSubmit(logAux)}
            >
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
            <div>
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