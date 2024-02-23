import React from 'react';
import { useLocation } from 'react-router-dom';

const MessageCancel = () => {
    const DataLocation = useLocation();
    const data = DataLocation.state ? DataLocation.state: null;

    return (
        <div>
            <h1>{`Sua reserva foi cancelada com sucesso!`}</h1> 
            <h3>{`Código: ${data}`}</h3>      
        </div>
    );
}

export default MessageCancel;
