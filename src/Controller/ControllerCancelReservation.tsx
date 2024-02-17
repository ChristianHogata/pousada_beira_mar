import api from "../View/Components/Services/Api";


async function ControllerCancelReservation(idRoom:string) {
    const response = await api.put(`/myReservation/cancel?idRoom=${idRoom}`);

    if(response.status ===(200)){
        
    }
   
}

export default ControllerCancelReservation;
