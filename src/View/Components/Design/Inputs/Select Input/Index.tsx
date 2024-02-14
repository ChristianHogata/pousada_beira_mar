import React from 'react';

const SelectInput: React.FC<{}> = (props)=>{
    return (
        <div className="mb-3">
            <label className="form-label">Seleção</label>
            <select id="selectInput" className="form-control">
                <option>Opção 1</option>
                <option>Opção 2</option>
            </select>
        </div>
    );
}

export default SelectInput;