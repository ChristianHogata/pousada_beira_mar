import { useState } from "react";
import api from "../View/Components/Services/Api";
import { NavigateFunction } from "react-router-dom";

interface ControllerRoomsProps{
  navigate: NavigateFunction;
}

const ControllerRooms = ({navigate}:ControllerRoomsProps) => {
  const [pousada, setPousada] = useState<string | null>(null);
  const [initDate, setInitDate] = useState<string | null>(null);
  const [finishDate, setFinishDate] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
  
    e.preventDefault();

    try {
      const response = await api.get(`/list?pousada=${pousada}&initReservationDate=${initDate}&endReservationDate=${finishDate}`);

      const data = {
        state: {data: response.data, date: {initReservationDate: initDate, finishReservationDate: finishDate}}    
      }

      navigate("/result", data);

    } catch (error) {
      console.error("Error fetching Rooms data:", error);
    }
  };

  return {handleSubmit, setPousada, setInitDate, setFinishDate, initDate};
}

export default ControllerRooms;
