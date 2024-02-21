import { useState } from "react";
import api from "../View/Components/Services/Api";

const ControllerMyReservation = () => {
    const[myReservationData, setmyReservationData] = useState<any | null>(null);
   
    const onLoad = async (loggedIn: any) => {
        try {
            const response = await api.get(`/myReservation?idUser=${loggedIn.user}`, {
                headers: { Authorization: `Bearer ${loggedIn.token}` }}
            );
            
            if(response.status ===(200)){
                setmyReservationData(response.data);
            }     
        } 
        catch (error) {
            console.log('Erro ao encontrar reserva', error);    
        }     
    }
   return {onLoad, myReservationData}; 
}

export default ControllerMyReservation;
