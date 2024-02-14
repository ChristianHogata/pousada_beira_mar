import React from 'react';
import { useLocation } from 'react-router-dom';

interface StringMessages {
    title: string,
    message: string;
}

const Message: React.FC = () => {
    const location = useLocation();
    const { title, message } = location.state as StringMessages;

    return (
        <div>
            <h1>{title}</h1> 
            <h3>{message}</h3>      
        </div>
    );
}

export default Message;
