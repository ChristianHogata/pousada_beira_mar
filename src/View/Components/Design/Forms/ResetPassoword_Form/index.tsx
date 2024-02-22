import StringInput from '../../Inputs/String_input/Index';
import ControllerResetPassword from '../../../../../Controller/ControllerResetPassword';
import './ResetPassowordForm.css';

  
const ResetPassowordForm = ()=>{
    const {handleSubmit, setpassword} = ControllerResetPassword(); 
    
    return (      
        <form  className="p-5" id='FmResetPassoword' onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} onChange={e => setpassword(e.target.value)} label = "Digite sua nova senha" maxLength={50} type='password'/>
                        </div>   
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} label = "Repita seu nova senha" type='password' maxLength={20}/>
                        </div>   
                    </div>
                </div> 
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Confirmar troca</button>
                        </div>   
                    </div>
                </div>          
            </div>
        </form>
    );
}

export default ResetPassowordForm;

