import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'; 
import SendForm from "../View/Components/Design/Forms/Find_Rooms_Form/Index";
import CarouselCards from '../View/Components/Design/Carousel_Card/Rooms_Carousel';
import Messages from '../View/Components/Design/Messages/Success_Message/Index';
import LoginForm from "../View/Components/Design/Forms/Login_Form/Index";
import RegisterForm from "../View/Components/Design/Forms/Register_Form/Index";
import { useLogin } from "../View/Components/Services/LoginProvider";
import { ReactNode, ReactElement } from 'react';
import MyReservationTable from '../View/Components/Design/Carousel_Card/MyReservation_Carousel';
import MessageCancel from '../View/Components/Design/Messages/Cancel_Message/Index';

interface RedirectIfNotLoggedInProps {
  children?: ReactNode;
}

const RedirectIfNotLoggedIn = ({ children }: RedirectIfNotLoggedInProps): ReactElement | null => {
  const { loggedIn } = useLogin();
  const location = useLocation();

  if (loggedIn == '' && location.pathname !== "/") {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

const RedirectIftLoggedIn = ({ children }: RedirectIfNotLoggedInProps): ReactElement | null => {
  const { loggedIn } = useLogin();
  const location = useLocation();

  if (loggedIn != '' && location.pathname == "/") {
    return null;
  }

  if(children){
    return <>{children}</>;
  }
  else{
    return null;
  }
  
};

const ControllerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectIftLoggedIn><LoginForm/></RedirectIftLoggedIn>} />
        <Route path="/search" element={<RedirectIfNotLoggedIn><SendForm/></RedirectIfNotLoggedIn>}/>
        <Route path="/result" element={<RedirectIfNotLoggedIn><CarouselCards/></RedirectIfNotLoggedIn>} />
        <Route path="/success" element={<RedirectIfNotLoggedIn><Messages/></RedirectIfNotLoggedIn>} />
        <Route path="/register" element={<RedirectIftLoggedIn><RegisterForm/></RedirectIftLoggedIn>} />
        <Route path="/myReservation" element={<RedirectIfNotLoggedIn><MyReservationTable/></RedirectIfNotLoggedIn>} />
        <Route path="/Cancel/sucess" element={<RedirectIfNotLoggedIn><MessageCancel/></RedirectIfNotLoggedIn>} />
        <Route path="*" element={<RedirectIfNotLoggedIn></RedirectIfNotLoggedIn>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ControllerRouter;
