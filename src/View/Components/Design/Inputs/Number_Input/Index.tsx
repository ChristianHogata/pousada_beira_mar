import React from 'react';

interface NumberInputProps {
    label: string,
    required: boolean;
    value: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ label, required, value, onChange }: NumberInputProps) => {
    return (
        <div>
            <label className="form-label">{label}</label>
            <input required={required} onChange={onChange} type="number" min={0} value={value} id="numberInput" className="form-control"></input>
        </div>
    );
}

export default NumberInput;