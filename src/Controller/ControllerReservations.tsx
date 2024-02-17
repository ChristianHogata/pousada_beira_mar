import { useState } from "react";
import api from "../View/Components/Services/Api";
import { useLogin } from "../LoginProvider";
import { NavigateFunction } from "react-router-dom";

interface ControllerReservations{
  navigate: NavigateFunction;
}

const ControllerReservations = ({navigate}:ControllerReservations)=> {
  const [numeroCartao, setnumeroCartao] = useState<string | null>(null);
  const [validade, setvalidade] = useState<string | null>(null);
  const [cvv, setcvv] = useState<string | null>(null);
  const [nomeCartao, setnomeCartao] = useState<string | null>(null);
  const [idRoom, setidRoom] = useState<string | null>(null);
  const { loggedIn } = useLogin();
  const [initDate, setInitDate] = useState<string | null>(null);
  const [finishDate, setFinishDate] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(`/reservation/success`, {numeroCartao, validade, cvv, nomeCartao, idRoom, loggedIn, initDate, finishDate});
      
      if (response.status === 200) {
        navigate('/success', {state: {data: response.data}});
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };
  
  return {handleSubmit, setnumeroCartao, setvalidade, setcvv, setnomeCartao, setidRoom, setInitDate, setFinishDate}; 
}

export default ControllerReservations;
