import React, { ReactElement } from 'react';
import StringInput from '../../Inputs/String_input/Index';
import { useNavigate } from 'react-router-dom';
import ControllerLogin from '../../../../../Controller/ControllerLogin';
import './loginForm.css';

  
const LoginForm = ()=>{
    const navigate = useNavigate();
    const {handleSubmit, setlogin, setpassword} = ControllerLogin(); 
    
    return (      
        <form  className="p-5" id='FmLogin' onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} onChange={e => setlogin(e.target.value)} label = "Login" maxLength={50} type='email'/>
                        </div>   
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} onChange={e => setpassword(e.target.value)} label = "Senha" type='password' maxLength={20}/>
                        </div>   
                    </div>
                </div> 
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </div>   
                    </div>

                    <div className="col">
                        <div className="mb-3">
                            <button type="button" className="btn btn-primary" onClick={() => navigate('/register')}>Registrar</button>
                        </div>   
                    </div>
                </div>          
            </div>

            <div className="mb-3">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <a onClick={() => navigate('/RecoveryPassword')} className="text-decoration-none">Esqueci minha senha</a>
                    </div>
                </div> 
            </div>
        </form>
    );
}

export default LoginForm;

