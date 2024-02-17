import React, { ReactElement } from 'react';
import StringInput from '../../Inputs/String_input/Index';
import EmailInput from '../../Inputs/Email_Input/Index';
import TelInput from '../../Inputs/Tel_Input/Index';
import { useNavigate } from 'react-router-dom';
import ControllerRegisterUser from '../../../../../Controller/ControllerRegisterUser';

  
const RegisterForm = () => {
    const {handleSubmit, setnome, setsobrenome, setemail, settelefone, setsenha} = ControllerRegisterUser(); 
    const navigate = useNavigate();
    return (
            
        <form style={{border: "Groove"}} className="p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput onChange={e => setnome(e.target.value)} label = "Nome" maxLength={20}/>
                        </div>   
                    </div>

                    <div className="col">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput onChange={e => setsobrenome(e.target.value)} label = "Sobrenome" maxLength={20}/>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <EmailInput onChange={e => setemail(e.target.value)}  label = "E-mail"/> 
                        </div>    
                    </div>

                    <div className="col">
                        <div className="col">
                            <div className="mb-3">
                                <TelInput onChange={e => settelefone(e.target.value)} />
                            </div>                                     
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <StringInput onChange={e => setsenha(e.target.value)}  label = "Senha" type='password'/> 
            </div> 

            <div className="d-flex justify-content-center">
                <button type='submit' className="btn btn-primary">Registrar</button>
            </div>

            <br></br>

            <div className="d-flex justify-content-center">
                <button type='button' className="btn btn-primary" onClick={()=>{navigate('/')}}>Voltar</button>
            </div>
        </form>
    );
}

export default RegisterForm;

