import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'; 
import SendForm from "../View/Components/Design/Forms/Find_Rooms_Form/Index";
import CarouselCards from '../View/Components/Design/Carousel_Card/Rooms_Carousel';
import Messages from '../View/Components/Design/Messages/Success_Message/Index';
import LoginForm from "../View/Components/Design/Forms/Login_Form/Index";
import RegisterForm from "../View/Components/Design/Forms/Register_Form/Index";
import RecoveryForm from '../View/Components/Design/Forms/Recovery_Form/Index';
import Success_Recovery from '../View/Components/Design/Messages/Recovery_Message/Success_Recovery';
import Bad_Recovery from '../View/Components/Design/Messages/Recovery_Message/Bad_Recovery';
import ResetPassowordForm from '../View/Components/Design/Forms/ResetPassoword_Form';
import BadResetPasswordMessage from '../View/Components/Design/Messages/ResetPassword_Message/Bad';
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
        <Route path="/RecoveryMessage" element={<RedirectIftLoggedIn><Success_Recovery/></RedirectIftLoggedIn>} />
        <Route path="/BadRecoveryMessage" element={<RedirectIftLoggedIn><Bad_Recovery/></RedirectIftLoggedIn>} />
        <Route path="/BadResetPassword" element={<RedirectIftLoggedIn><BadResetPasswordMessage/></RedirectIftLoggedIn>} />
        <Route path="/success" element={<RedirectIfNotLoggedIn><Messages/></RedirectIfNotLoggedIn>} />
        <Route path="/register" element={<RedirectIftLoggedIn><RegisterForm/></RedirectIftLoggedIn>} />
        <Route path="/myReservation" element={<RedirectIfNotLoggedIn><MyReservationTable/></RedirectIfNotLoggedIn>} />
        <Route path="/Cancel/sucess" element={<RedirectIfNotLoggedIn><MessageCancel/></RedirectIfNotLoggedIn>} />
        <Route path="/RecoveryPassword" element={<RedirectIftLoggedIn><RecoveryForm/></RedirectIftLoggedIn>} />
        <Route path="/reset_password" element={<RedirectIftLoggedIn><ResetPassowordForm/></RedirectIftLoggedIn>} />
        <Route path="*" element={<RedirectIfNotLoggedIn></RedirectIfNotLoggedIn>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ControllerRouter;
