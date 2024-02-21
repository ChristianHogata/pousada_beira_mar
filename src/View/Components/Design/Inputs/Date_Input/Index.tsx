import React from 'react';

interface DateInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    minDate?: string;
    label: string;
    required: boolean;
}

const DateInput = ({onChange, minDate, label, required}: DateInputProps) => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const minValue = minDate || formattedDate;

    return (
        <div>
            <label className="form-label">{label}</label>
            <input required={required} type="date" id="DateInput" min={minValue}  onChange={onChange} className="form-control"></input>
        </div>   
    );
}

export default DateInput;
