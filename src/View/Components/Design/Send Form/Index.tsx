import React from 'react';
import SelectInput from '../Inputs/Select Input/Index';
import DateInput from '../Inputs/Date Input/Index';
import NumberInput from '../Inputs/Number Input/Index';
import SearchInput from '../Search Button/Index';

const SendForm: React.FC<{}> = (props)=>{
    return (
        <form style={{border: "Groove"}} className="p-3">
            <div className="mb-3">
                <SelectInput/>
            </div>

            <div className="mb-3">
                <DateInput/>
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
