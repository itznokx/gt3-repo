import React, { useContext, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import {  useForm } from 'react-hook-form'
import { ContextAuth } from '../contexts/AuthContext';


const Login = () => {
  const [showPassword, setPasswordVisibility] = useState(true);
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
            className="bg-sky-400 shadow-lg rounded-xl flex flex-col gap-5 justify-center items-center p-10 w-200 justify-self-center self-center" 
            onSubmit={handleSubmit(logAux)}
            >
            <h3>Seja Bem-vindo</h3>
            <div className=' bg-red-200 flex flex-col w-100 gap-3 p-2'>
                <label htmlFor="email" className=''>Email</label> 
                <InputText
                    className="pl-5"
                    id="email" 
                    type="email"
                    placeholder="email@domain.com"
                    {...register('email', {required: true})}
                />
            </div>
            <div className='bg-red-200 flex flex-col w-100 gap-3 p-2'>
                <label htmlFor="password" className='block'>Senha</label> 
                <IconField
                    
                >
                    <InputText
                        type={showPassword ? 'password' : 'text'}
                        id='password'
                        placeholder='********'
                        {...register('password', {required: true})}
                        className='pl-5'
                    />
                    <InputIcon 
                        className={ `pi ${showPassword ? 'pi-eye-slash' : 'pi-eye'} cursor-pointer ml-5`}
                        onClick={ () => setPasswordVisibility(!showPassword)}
                        
                    />
                </IconField>
            </div>
            <Button className='border-red-500 border-radius-5' type="submit" label="Entrar" />
        </form>
      </div>
  );
};
export default Login;