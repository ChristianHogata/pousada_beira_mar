import React from 'react';
import { useLocation } from 'react-router-dom';

const Success_Recovery = () => {
    const DataLocation = useLocation();
    const data = DataLocation.state ? DataLocation.state.data : null;

    return (
        <div>
            <h1>{`Foi enviado um link de redefinição de senha ao seu e-mail!`}</h1>      
        </div>
    );
}

export default Success_Recovery;
