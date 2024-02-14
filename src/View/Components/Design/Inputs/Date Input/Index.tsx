import React, { FC, useState, useEffect } from 'react';

const DateInput: FC = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const [startDate, setStartDate] = useState(formattedDate);
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const date = new Date(startDate);
        date.setDate(date.getDate() + 1);
        const nextDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        setEndDate(nextDate);
    }, [startDate]);

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Data de Início</label>
                        <input type="date" id="startDateInput" min={formattedDate} value={startDate} onChange={handleStartDateChange} className="form-control"></input>
                    </div>
                </div>

                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Data de Fim</label>
                        <input type="date" id="endDateInput" min={endDate} className="form-control"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DateInput;
