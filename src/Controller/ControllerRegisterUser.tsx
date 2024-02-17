import { useState } from "react";
import api from "../View/Components/Services/Api";
import { useNavigate } from "react-router-dom";

const ControllerRegisterUser = ()=> {
  const [nome, setnome] = useState<string | null>(null);
  const [sobrenome, setsobrenome] = useState<string | null>(null);
  const [email, setemail] = useState<string | null>(null);
  const [telefone, settelefone] = useState<string | null>(null);
  const [senha, setsenha] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post(`/register`, {nome, sobrenome, email, telefone, senha});
      
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return {handleSubmit, setnome, setsobrenome, setemail, settelefone, setsenha}; 
}

export default ControllerRegisterUser;
