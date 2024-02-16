import { useState } from "react";
import api from "../View/Components/Services/Api";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate

function ControllerRooms() {
  const [Rooms, setRooms] = useState({});
  const [pousada, setPousada] = useState<string | null>(null);
  const [initDate, setInitDate] = useState<string | null>(null);
  const [finishDate, setFinishDate] = useState<string | null>(null);
  const [data, setData] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRooms({ ...Rooms, [name]: value });
    console.log('Dados do formulário:', Rooms); 
  };

  const navigate = useNavigate(); // Adicione esta linha

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.get(`/list?pousada=${pousada}&initReservationDate=${initDate}&endReservationDate=${finishDate}`);
      setData(response.data); // Armazene os dados retornados no estado

      // Redireciona para a nova rota
      navigate("/result", { state: { data: response.data } });

      console.log('Dados do formulário:', response.data); 
    } catch (error) {
      console.error("Error fetching Rooms data:", error);
    }
  };

  return { Rooms, handleChange, handleSubmit, setPousada, setInitDate, setFinishDate, initDate, finishDate}; // Adicione initDate aqui
}

export default ControllerRooms;
