import React from 'react';

const TelInput: React.FC<{onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void}> = ({onChange})=>{
    return (
        <div>
            <label className="form-label">Telefone</label>
            <input onChange={onChange} type="text" placeholder='(99) 99999-9999' id="telInput" pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}" className="form-control"></input>
        </div>
    );
}

export default TelInput;