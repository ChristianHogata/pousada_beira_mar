import { useState, useEffect } from "react";
import api from "../View/Components/Services/Api";
import { useParams } from 'react-router-dom';

function ControllerRooms() {
    const [Rooms, setRooms] = useState({});
    const {initDate, finishDate} = useParams();

    useEffect(() => 
      {
        async function fetchRoomsData() {
          try {
            const response = await api.get(`/search/${initDate}/${finishDate}`);
            setRooms(response.data);
          } 
          catch (error) {
            console.error("Error fetching Rooms data:", error);
          }
        }

        fetchRoomsData();
      } ,[initDate, finishDate]
    );

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRooms({ ...Rooms, [name]: value });
    console.log('Dados do formulário:', Rooms); 
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    api.put(`/search/${initDate}/${finishDate}`, Rooms); 
  };

  return  { Rooms, handleChange, handleSubmit };

}

export default ControllerRooms;