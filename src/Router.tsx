import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import SendForm from "./View/Components/Design/Send Form/Index";
import CarouselCards from "./View/Components/Design/Carousel Card/Carousel";
import Message from "./View/Components/Design/Message/Index";
import ReservationTable from "./View/Components/Table/ReservationTable";

const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SendForm />} />
        <Route path="/search/:initDate/:finishDate" element={<CarouselCards />} />
        <Route path="/search/reservation/:reservation" element={<ReservationTable />} />
        <Route path="/success" element={<Message/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;