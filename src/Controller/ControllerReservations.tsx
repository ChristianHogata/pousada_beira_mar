import { useState, useEffect } from "react";
import api from "../View/Components/Services/Api";
import { useParams } from 'react-router-dom';

const ControllerReservations = () => {
  const [Reservations, setReservations] = useState([{}]);
  const {ReservationNumber} = useParams();

  useEffect(() => {
    async function fetchReservationsData() {
      try {
        const response = await api.get(`/search/reservation/${ReservationNumber}`);
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching Reservations data:", error);
      }
    }

    fetchReservationsData();
  }, [ReservationNumber]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setReservations({ ...Reservations, [name]: value });
    console.log('Dados do formulário:', Reservations);
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    api.delete(`/search/reservation/${ReservationNumber}`); 
  };

  return { Reservations, handleChange, handleSubmit };
}

export default ControllerReservations;
