import React from 'react';
import { useLocation } from 'react-router-dom';

const Message = () => {
    const DataLocation = useLocation();
    const data = DataLocation.state ? DataLocation.state.data : null;
    console.log(data);
    return (
        <div>
            <h1>{`Sua reserva foi realizada com sucesso!`}</h1> 
            <h3>{`Código: ${data}`}</h3>      
        </div>
    );
}

export default Message;
