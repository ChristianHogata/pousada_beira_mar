import React from 'react';
import SelectInput from '../../Inputs/Select_Input/Index';
import DateInput from '../../Inputs/Date_Input/Index';
import NumberInput from '../../Inputs/Number_Input/Index';
import ControllerFindRooms from '../../../../../Controller/ControllerFindRooms';
import {useNavigate } from 'react-router-dom';

const SendForm: React.FC<{}> = (props)=>{
    const navigate = useNavigate();
    const {handleSubmit, setPousada, setInitDate, setFinishDate, initDate} = ControllerFindRooms({navigate}); 
    
    return (
        <form style={{border: "Groove"}} className="p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <SelectInput onChange={e => setPousada(e.target.value)} 
                    values={[
                        {value: 1, text: 'Pousada Beira Mar - Caraguatatuba-SP'},
                        {value: 2, text: 'Pousada Beira Mar - Ubatuba-SP'}
                    ]} 
                />
            </div>

            <div className="mb-3">
                <div className="col">
                    <div className="mb-3">
                        <DateInput onChange={e => setInitDate(e.target.value)} label='Data inicial' />
                    </div>
                </div>

                <div className="col">
                    <div className="mb-3">
                        <DateInput onChange={(e)=>{setFinishDate(e.target.value)}} minDate={initDate || ''} label='Data final' />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <NumberInput label='Adultos'/>                    
                        </div>
                    </div>

                    <div className="col">
                        <div className="mb-3">
                            <NumberInput label='Crianças'/>
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
