import React from 'react';

interface NumberInputProps {
    label: string,
}

const NumberInput = ({label}: NumberInputProps)=>{
    return (
        <div>
            <label className="form-label">{label}</label>
            <input type="number" min={0} id="numberInput" className="form-control"></input>
        </div>
    );
}

export default NumberInput;