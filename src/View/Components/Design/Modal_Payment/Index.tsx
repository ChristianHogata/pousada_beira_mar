import {useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import StringInput from '../Inputs/String_input/Index';
import { useNavigate } from 'react-router-dom';
import ControllerReservations from '../../../../Controller/ControllerReservations';

interface MyModalProps {
    show: boolean;
    handleClose: () => void;
    idRoom: string;
    InitDate: string;
    FinishDate: string;
}
  
const MyModal = ({show, handleClose, idRoom, InitDate, FinishDate}: MyModalProps) => {
    const navigate = useNavigate();
    const {handleSubmit, setnumeroCartao, setvalidade, setcvv, setnomeCartao, setidRoom, setInitDate, setFinishDate} = ControllerReservations({navigate}); 

    useEffect(() => {
        setidRoom(idRoom);
        setInitDate(InitDate);
        setFinishDate(FinishDate);
    }, [idRoom]);

    const handleValidadeChange =  (e: React.KeyboardEvent<HTMLInputElement>)  => {
        let value = (e.target as HTMLInputElement).value;
   
        if  (value.length === 2 && !value.includes("/")) {
            value = value + "/";
            (e.target as HTMLInputElement).value = value;
        }
        setvalidade(value);
    };
     
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Dados de pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
               
            <form style={{border: "Groove"}} className="p-3" onSubmit={handleSubmit}>       
                <div className="mb-3">
                    <div className="mb-3">
                        <StringInput required={true} onChange={e => setnumeroCartao(e.target.value)} label = "Número do cartão" maxLength={19} placeholder='1234 5678 9012 3456'/> 
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput required={true}  onKeyUp={handleValidadeChange} label = "Validade" maxLength={5} placeholder='MM/AA' pattern='(0[1-9]|1[0-2])\/[0-9]{2}'/> 
                            </div>
                        </div>

                        <div className="col">
                            <div className="col">
                                <div className="mb-3">
                                    <StringInput required={true} onChange={e => setcvv(e.target.value)} label = "CVV" maxLength={3} pattern='^[0-9]{3}$'/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <StringInput required={true} onChange={e => setnomeCartao(e.target.value)} label = "Nome no cartão" maxLength={30}/>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button type='submit' className="btn btn-primary">Reservar</button>
                </div>
            </form>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
}

export default MyModal;

