import React from 'react';

interface StringInputProps {
    label?: string,
    placeholder?: string,
    maxLength?: number,
    pattern?: string;
    type?:string;
    required: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    
}

const StringInput: React.FC<StringInputProps> = ({ label, type, placeholder, maxLength, pattern, onChange, onKeyUp, required }) => {
    return (
        <div>
            <label className="form-label">{label}</label>
            <input type={(type = '' ? 'text' : type)} required={required} id="StringInput" className="form-control" onKeyUp={onKeyUp} onChange={onChange} placeholder={placeholder} maxLength={maxLength} pattern={pattern}></input>
        </div>
    );
}

export default StringInput;