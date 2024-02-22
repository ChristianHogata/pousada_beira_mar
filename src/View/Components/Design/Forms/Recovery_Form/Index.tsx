import React, { ReactElement } from 'react';
import StringInput from '../../Inputs/String_input/Index';
import { useNavigate } from 'react-router-dom';
import ControllerRecoveryPassword from '../../../../../Controller/ControllerRecoveryPassword';
import './RecoveryForm.css';

  
const RecoveryForm = ()=>{
    const navigate = useNavigate();
    const {handleSubmit, setlogin} = ControllerRecoveryPassword(); 
    
    return (      
        <form  className="p-5" id='FmRecovery' onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} onChange={e => setlogin(e.target.value)} label = "Digite seu e-mail" maxLength={50} type='email'/>
                        </div>   
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} label = "Repita seu e-mail" type='text' maxLength={20}/>
                        </div>   
                    </div>
                </div> 
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Redefinir Senha</button>
                        </div>   
                    </div>
                </div>          
            </div>
        </form>
    );
}

export default RecoveryForm;

