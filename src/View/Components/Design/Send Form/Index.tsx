import React from 'react';
import SelectInput from '../Inputs/Select Input/Index';
import DateInputInit from '../Inputs/Date Input/Index';
import DateInputFinish from '../Inputs/Date Input/index2';
import NumberInput from '../Inputs/Number Input/Index';
import SearchInput from '../Search Button/Index';
import ControllerRooms from '../../../../Controller/ControllerRooms';

const SendForm: React.FC<{}> = (props)=>{
    const { handleSubmit, setPousada, setInitDate, setFinishDate, initDate, finishDate } = ControllerRooms(); 
    return (
        <form style={{border: "Groove"}} className="p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <SelectInput onChange={e => setPousada(e.target.value)} />
            </div>

            <div className="mb-3">
                <DateInputInit onChange={e => setInitDate(e.target.value)} minDate={initDate || ''} />
                <DateInputFinish onChange={e => setFinishDate(e.target.value)} minDate={finishDate || ''} />
            </div>

            <div className="mb-3">
                <NumberInput/>
            </div>

            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
}

export default SendForm;
