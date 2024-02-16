import React, { ReactElement } from 'react';
import StringInput from '../Inputs/String input/Index';
import { useNavigate } from 'react-router-dom';
import ControllerLogin from '../../../../Controller/ControllerLogin';

  
const LoginForm = ()=>{
    const navigate = useNavigate();
    const {handleSubmit, setlogin, setpassword} = ControllerLogin(navigate); 
    
    return (      
        <form style={{border: "Groove"}} className="p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput onChange={e => setlogin(e.target.value)} label = "Login" maxLength={50} type='email'/>
                        </div>   
                    </div>

                    <div className="col">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput onChange={e => setpassword(e.target.value)} label = "Senha" type='password' maxLength={20}/>
                            </div>   
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </div>

                <br></br>

                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/register')}>Registre-se</button>
                </div>
                
            </div>
        </form>
    );
}

export default LoginForm;

