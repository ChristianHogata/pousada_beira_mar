import { useState, useEffect } from "react";
import api from "../View/Components/Services/Api";
import { NavigateFunction } from 'react-router-dom';
import { useLogin } from "../LoginProvider";

const ControllerLogin = (navigate?: NavigateFunction) => {
  const { setLoggedIn } = useLogin();
  const [login, setlogin] = useState<string | null>(null);
  const [password, setpassword] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(`/login`, {login, password});

      if (response.status === 200) {
        // Atualiza o estado de login no contexto
        setLoggedIn(response.data.id);

        // Atualiza o estado de login no localStorage
        localStorage.setItem('loggedIn', JSON.stringify(response.data.id));

        if (navigate) {
          navigate('/search');
        }
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setLoggedIn('');
    }
  };

  return {handleSubmit, setlogin, setpassword}; 
}

export default ControllerLogin;
