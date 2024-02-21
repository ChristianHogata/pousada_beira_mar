import api from "../View/Components/Services/Api";
import { NavigateFunction } from "react-router-dom";

interface IControllerCancelReservation{
    navigator: NavigateFunction;
    loggedIn: any
}
  
const ControllerCancelReservation = async ({navigator, loggedIn}:IControllerCancelReservation, idRoom: any)=> { 

    try {
        const response = await api.put(`/myReservation/cancel?idRoom=${idRoom}`, {}, {
            headers: { Authorization: `Bearer ${loggedIn.token}`}
        });
        
    
        if(response.status ===(200)){
            navigator('/Cancel/sucess',{state:idRoom});
        }    
    } 
    catch (error) {
        console.error('Erro ao cancelar reserva:', error);    
    } 
}

export default ControllerCancelReservation;
