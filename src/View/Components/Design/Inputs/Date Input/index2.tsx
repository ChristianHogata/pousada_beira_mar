import React, { FC, useState, useEffect } from 'react';

const DateInputFinish: React.FC<{ onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, minDate: string }> = ({ onChange, minDate }) => {
    const [endDate, setEndDate] = useState(minDate);

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
        onChange(event); // Passa o evento para cima
    };

    return (
        <div className="col">
            <div className="mb-3">
                <label className="form-label">Data de Fim</label>
                <input type="date" id="endDateInput" min={endDate} value={endDate} onChange={handleEndDateChange} className="form-control"></input>
            </div>
        </div>
    );
}

export default DateInputFinish;