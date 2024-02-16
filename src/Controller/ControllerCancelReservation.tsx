import api from "../View/Components/Services/Api";



async function ControllerCancelReservation(idRoom:string) {
    const response = await api.put(`/myReservation/cancel?idRoom=${idRoom}`);
    console.log('put');

    if(response.status ===(200)){
        localStorage.removeItem('myReservationData');
    }
   
}

export default ControllerCancelReservation;
