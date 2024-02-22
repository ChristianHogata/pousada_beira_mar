import React from 'react';
import { useLocation } from 'react-router-dom';

const Bad_Recovery = () => {
    const DataLocation = useLocation();
    const data = DataLocation.state ? DataLocation.state.data : null;

    return (
        <div>
            <h1>{`Ouve uma falha ao enviar o link de redefinição ao seu e-mail.`}</h1>      
        </div>
    );
}

export default Bad_Recovery;
