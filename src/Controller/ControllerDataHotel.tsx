import { useState, useEffect } from "react";
import api from "../View/Components/Services/Api";
import { useParams } from 'react-router-dom';

const ControllerDataHotel = () => {
  const [hotelName, setHotels] = useState([{}]);

  useEffect(() => {
    async function fetchHotelData() {
      try {
        const response = await api.get(`/search/hotel`);
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching Hotels data:", error);
      }
    }

    fetchHotelData();
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setHotels({ ...hotelName, [name]: value });
  } 

  return { hotelName, handleChange };
}

export default ControllerDataHotel;
