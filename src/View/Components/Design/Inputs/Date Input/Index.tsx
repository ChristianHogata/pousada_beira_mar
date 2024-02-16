import React, { FC, useState, useEffect } from 'react';

const DateInputInit: React.FC<{ onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, minDate: string }> = ({ onChange, minDate }) => {
    const [InitDate, setEndDate] = useState(minDate);
   
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
        onChange(event); // Passa o evento para cima
    };

    return (
        <div className="col">
            <div className="mb-3">
                <label className="form-label">Data de Início</label>
                <input type="date" id="startDateInput" min={InitDate} value={InitDate} onChange={handleStartDateChange} className="form-control"></input>
            </div>
        </div>
    );
}

export default DateInputInit;
