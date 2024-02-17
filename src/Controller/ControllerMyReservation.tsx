import { useState } from "react";
import api from "../View/Components/Services/Api";

const ControllerMyReservation = () => {
    const[myReservationData, setmyReservationData] = useState<any | null>(null);
    const onLoad = async (loggedIn: any) => {     
        const response = await api.get(`/myReservation?idUser=${loggedIn}`);
        
        if(response.status ===(200)){
            setmyReservationData(response.data);
        } 
    }
   return {onLoad, myReservationData}; 
}

export default ControllerMyReservation;
