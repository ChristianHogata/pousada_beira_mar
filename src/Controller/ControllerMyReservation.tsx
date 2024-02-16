import api from "../View/Components/Services/Api";



async function ControllerMyReservation(loggedIn:string) {
   

    if(localStorage.getItem('myReservationData') === null){
        const response = await api.get(`/myReservation?idUser=${loggedIn}`);
        console.log('a');
        if(response.status ===(200)){
            localStorage.setItem('myReservationData', JSON.stringify(response.data));
        }
    } 
   
}

export default ControllerMyReservation;
