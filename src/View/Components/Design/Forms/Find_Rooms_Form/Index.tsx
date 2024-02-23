import React, { useState } from 'react';
import SelectInput from '../../Inputs/Select_Input/Index';
import DateInput from '../../Inputs/Date_Input/Index';
import NumberInput from '../../Inputs/Number_Input/Index';
import ControllerFindRooms from '../../../../../Controller/ControllerFindRooms';
import { useNavigate } from 'react-router-dom';
import './FindRoomsForm.css';

const SendForm: React.FC<{}> = (props) => {
    const navigate = useNavigate();
    const { handleSubmit, setPousada, setInitDate, setFinishDate, initDate } = ControllerFindRooms({ navigate });
    const [adultos, setAdultos] = useState(0);
    const [criancas, setCriancas] = useState(0);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        e.target.value = value;
        setPousada(value);
    };

    return (
        <form style={{ border: "Groove" }} className="p-3" id='FindRoomsForm' onSubmit={handleSubmit}>
            <div className="mb-3">
                <SelectInput required={true} onChange={handleSelectChange}
                    values={[
                        { value: 1, text: 'Pousada Beira Mar - Caraguatatuba-SP' },
                        { value: 2, text: 'Pousada Beira Mar - Ubatuba-SP' }
                    ]}
                />
            </div>

            <div className="mb-3">
                <div className="col">
                    <div className="mb-3">
                        <DateInput required={true} onChange={e => setInitDate(e.target.value)} label='Data inicial' />
                    </div>
                </div>

                <div className="col">
                    <div className="mb-3">
                        <DateInput required={true} onChange={(e) => { setFinishDate(e.target.value) }} minDate={initDate || ''} label='Data final' />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <NumberInput value={adultos} required={true} label='Adultos' onChange={(e) => setAdultos(Number(e.target.value))} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="mb-3">
                            <NumberInput value={criancas} required={true} label='Crianças' onChange={(e) => setCriancas(Number(e.target.value))} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
}

export default SendForm;
