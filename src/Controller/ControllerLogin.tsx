import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../View/Components/Services/Api";
import { useLogin } from "../View/Components/Services/LoginProvider";

const ControllerLogin = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useLogin();
  const [login, setlogin] = useState<string | null>(null);
  const [password, setpassword] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await api.post(`/login`, {login, password});

      if (response.status === 200) {
        setLoggedIn(response.data.user);

        sessionStorage.setItem('loggedIn', JSON.stringify(response.data));
        
        navigate('/search');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setLoggedIn('');
    }
  };

  return {handleSubmit, setlogin, setpassword}; 
}

export default ControllerLogin;
