import React from 'react';
import StringInput from '../../Inputs/Personal_input/Index';
import { useNavigate } from 'react-router-dom';
import ControllerRegisterUser from '../../../../../Controller/ControllerRegisterUser';
import './RegisterForm.css';


const RegisterForm = () => {
    const { handleSubmit, setnome, setsobrenome, setemail, settelefone, setsenha } = ControllerRegisterUser();
    const navigate = useNavigate();

    const handleTelefoneChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let value = (e.target as HTMLInputElement).value;
     
        value = value.replace(/\D/g, ""); // remove todos os caracteres não numéricos
        if (value.length > 0) {
            value = "(" + value;
        }
        if (value.length > 3) {
            value = value.slice(0, 3) + ") " + value.slice(3);
        }
        if (value.length > 10) {
            value = value.slice(0, 10) + "-" + value.slice(10);
        }
        if (value.length > 15) {
            value = value.slice(0, 15);
        }
        (e.target as HTMLInputElement).value = value;
        settelefone(value);
    };

    return (

        <form style={{ border: "Groove" }} className="p-3" id='RegisterForm' onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput required={true} onChange={e => setnome(e.target.value)} label="Nome" maxLength={20} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput required={true} onChange={e => setsobrenome(e.target.value)} label="Sobrenome" maxLength={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <StringInput type='email' required={true} onChange={e => setemail(e.target.value)} label="E-mail" />
                        </div>
                    </div>

                    <div className="col">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput type='tel' required={true} onKeyUp={handleTelefoneChange} label="Telefone" maxLength={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <StringInput required={true} onChange={e => setsenha(e.target.value)} label="Senha" type='password' />
            </div>

            <div className="mb-3 d-flex justify-content-center">
                <button type='submit' className="btn btn-primary me-2">Registrar</button>
                <button type='button' className="btn btn-primary" onClick={() => { navigate('/') }}>Voltar</button>
            </div>

        </form>
    );
}

export default RegisterForm;

