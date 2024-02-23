import {useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../View/Components/Services/Api";

const ControllerResetPassword = () => {
    const navigate = useNavigate();
    const [password, setpassword] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const token = new URLSearchParams(window.location.search).get('token');

        try {   
            const response = await api.post(`/reset_password`, {password, token});

            if (response.status === 200) {  
                sessionStorage.removeItem('loggedIn');
                navigate('/');
            } 
        }
        catch (error) {
            console.error('Erro ao enviar dados:', error);
            navigate('/BadResetPassword'); 
        }
    };

  return {handleSubmit, setpassword}; 
}

export default ControllerResetPassword;
