import { useState } from "react";
import api from "../View/Components/Services/Api";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../LoginProvider";

const ControllerReservations = ()=> {
  const [numeroCartao, setnumeroCartao] = useState<string | null>(null);
  const [validade, setvalidade] = useState<string | null>(null);
  const [cvv, setcvv] = useState<string | null>(null);
  const [nomeCartao, setnomeCartao] = useState<string | null>(null);
  const [idRoom, setidRoom] = useState<string | null>(null);
  const { loggedIn } = useLogin();
  
  const navigate = useNavigate(); 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(`/reservation/success`, {numeroCartao, validade, cvv, nomeCartao, idRoom, loggedIn});
      
      if (response.status === 200) {
        navigate('/success');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };
  

  return {handleSubmit, setnumeroCartao, setvalidade, setcvv, setnomeCartao, setidRoom}; 
}

export default ControllerReservations;
