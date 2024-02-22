import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../View/Components/Services/Api";

const ControllerRecoveryPassword = () => {
    const navigate = useNavigate();
    const [login, setlogin] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {   
            const response = await api.post(`/RecoveryPassword`, {login});

            if (response.status === 200) {  
                navigate('/RecoveryMessage');
            } 
            else{
                navigate('/BadRecoveryMessage');   
            }
        }
        catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

  return {handleSubmit, setlogin}; 
}

export default ControllerRecoveryPassword;
