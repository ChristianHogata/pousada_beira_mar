import api from "../View/Components/Services/Api";
import { NavigateFunction } from "react-router-dom";

interface IControllerCancelReservation{
    navigator: NavigateFunction;
  }
  
const ControllerCancelReservation = async ({navigator}:IControllerCancelReservation, idRoom: any)=> {
    const response = await api.put(`/myReservation/cancel?idRoom=${idRoom}`);

    if(response.status ===(200)){
        navigator('/Cancel/sucess',{state:idRoom});
    }
   
}

export default ControllerCancelReservation;
