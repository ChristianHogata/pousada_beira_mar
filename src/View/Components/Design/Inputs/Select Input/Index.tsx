import React from 'react';

const SelectInput: React.FC<{ onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void }> = ({ onChange }) => {
    return (
        <div className="mb-3">
            <label className="form-label">Seleção</label>
            <select id="selectInput" className="form-control" onChange={onChange}>
                <option value={1}>Pousada Beira Mar - Caraguatatuba-SP</option>
                <option value={2}>Pousada Beira Mar - Ubatuba-SP</option>
            </select>
        </div>
    );
}


export default SelectInput;