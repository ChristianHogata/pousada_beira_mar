import React from 'react';

interface NumberInputProps {
    label: string,
    required: boolean;
    value: number;
}

const NumberInput = ({label, required, value}: NumberInputProps)=>{
    return (
        <div>
            <label className="form-label">{label}</label>
            <input required={required} type="number" min={0} value={value} id="numberInput" className="form-control"></input>
        </div>
    );
}

export default NumberInput;