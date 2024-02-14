import React from 'react';

const NumberInput: React.FC<{}> = (props)=>{
    return (
        <div className="mb-3">
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Adultos</label>
                        <input type="number" min={0} id="numberInput" className="form-control"></input>
                    </div>
                </div>

                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Crianças</label>
                        <input type="number" min={0} id="numberInput" className="form-control"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NumberInput;