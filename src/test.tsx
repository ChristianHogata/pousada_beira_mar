import { useLogin } from "./LoginProvider";
import { ReactNode, ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, Path } from 'react-router-dom'; 

interface RedirectIfNotLoggedInProps {
    children?: ReactNode;
    path?: string;
    element: ReactNode;
}
  
const ProtectedRoute = ({ path, element }: RedirectIfNotLoggedInProps): ReactElement | null => {
    const { loggedIn } = useLogin();
    const location = useLocation();

    if (!loggedIn && location.pathname !== "/") {
        console.log(1);
        return <Navigate to="/" />;
    }
    console.log(2);
    return <Route path={path} element={loggedIn && location.pathname !== "/" ? element : <Navigate to="/" />} />;
};

export default ProtectedRoute;
