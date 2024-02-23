import React from 'react';

interface Value {
    value: number;
    text: string;
}

interface SelectInputProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    values: Value[];
    required: boolean;
}

const SelectInput = ({ onChange, values }: SelectInputProps) => {
    return (
        <div>
            <label className="form-label">Seleção</label>
            <select required={true} id="selectInput" className="form-control" onChange={onChange}>
                <option defaultValue={0} value={0}>{'Selecione um local'}</option>
                {values.map((value, index) => (
                    <option key={index} value={value.value}>{value.text}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;
