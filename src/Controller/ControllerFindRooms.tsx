import { useState } from "react";
import api from "../View/Components/Services/Api";
import { NavigateFunction } from "react-router-dom";
import { useLogin } from "../View/Components/Services/LoginProvider";


interface ControllerRoomsProps{
  navigate: NavigateFunction;
}

const ControllerFindRooms = ({navigate}:ControllerRoomsProps) => {
  const [pousada, setPousada] = useState<string | null>(null);
  const [initDate, setInitDate] = useState<string | null>(null);
  const [finishDate, setFinishDate] = useState<string | null>(null);
  const { loggedIn } = useLogin();

  const handleSubmit = async (e: any) => {
  
    e.preventDefault();

    try {
      const response = await api.get(`/list?pousada=${pousada}&initReservationDate=${initDate}&endReservationDate=${finishDate}`, {
        headers: { Authorization: `Bearer ${loggedIn.token}` }
      });

      if(response.status ===(200)){
        const data = {
          state: {data: response.data, date: {initReservationDate: initDate, finishReservationDate: finishDate}}    
        }
  
        navigate("/result", data);  
      } 
      
    } catch (error) {
      console.error("Error fetching Rooms data:", error);
    }
  };

  return {handleSubmit, setPousada, setInitDate, setFinishDate, initDate};
}

export default ControllerFindRooms;
