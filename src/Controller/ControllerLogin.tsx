import { useState} from "react";
import api from "../View/Components/Services/Api";
import { NavigateFunction } from 'react-router-dom';
import { useLogin } from "../View/Components/Services/LoginProvider";

const ControllerLogin = (navigate?: NavigateFunction) => {
  const { setLoggedIn } = useLogin();
  const [login, setlogin] = useState<string | null>(null);
  const [password, setpassword] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    try {
      const response = await api.post(`/login`, {login, password});

      if (response.status === 200) {
        setLoggedIn(response.data.id);

        sessionStorage.setItem('loggedIn', JSON.stringify(response.data));

        if (navigate) {
          navigate('/search');
          window.location.reload();
        }
      }
    } 
    catch (error) {
      console.error('Erro ao enviar dados:', error);
      
      setLoggedIn('');
    }
  };

  return {handleSubmit, setlogin, setpassword}; 
}

export default ControllerLogin;
