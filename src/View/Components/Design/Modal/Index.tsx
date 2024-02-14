import React, { ReactElement } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SelectInput from '../Inputs/Select Input/Index';
import DateInput from '../Inputs/Date Input/Index';
import NumberInput from '../Inputs/Number Input/Index';
import SearchInput from '../Search Button/Index';
import StringInput from '../Inputs/String input/Index';
import EmailInput from '../Inputs/Email Input/Index';
import TelInput from '../Inputs/Tel Input/Index';
import { useNavigate } from 'react-router-dom';

interface MyModalProps {
    show: boolean;
    handleClose: () => void;
  }
  
  const MyModal = ({ show, handleClose }: MyModalProps): ReactElement => {
    
    const navigate = useNavigate();

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Dados de pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <form style={{border: "Groove"}} className="p-3">
                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput label = "Nome" maxLength={20}/>
                            </div>   
                        </div>

                        <div className="col">
                            <div className="col">
                                <div className="mb-3">
                                    <StringInput label = "Sobrenome" maxLength={20}/>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <EmailInput label = "E-mail"/> 
                            </div>    
                        </div>

                        <div className="col">
                            <div className="col">
                                <div className="mb-3">
                                    <TelInput/>
                                </div>                                     
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="mb-3">
                        <StringInput label = "Número do cartão" maxLength={19} placeholder='1234 5678 9012 3456'/> 
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput label = "Validade" maxLength={5} placeholder='MM/AA' pattern='(0[1-9]|1[0-2])\/[0-9]{2}'/> 
                            </div>
                        </div>

                        <div className="col">
                            <div className="col">
                                <div className="mb-3">
                                    <StringInput label = "CVV" maxLength={3} pattern='^[0-9]{3}$'/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput label = "Nome no cartão" maxLength={30}/>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => { handleClose(); navigate('/success', { state: { title: 'Sua reserva foi realizada com sucesso!', message: 'Código da reserva: #12345' } }); }}>Reservar</button>
                </div>
            </form>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
}

export default MyModal;

