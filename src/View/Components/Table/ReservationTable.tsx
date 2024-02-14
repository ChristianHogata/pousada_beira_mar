import { Component } from "react";
import api from "../Services/Api";
import { Link } from "react-router-dom";
import ControllerReservations from "../../../Controller/ControllerReservations";

function ReservationTable(){
    
    const { Reservations, handleChange, handleSubmit } = ControllerReservations(); 
    
    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>
                {Reservations.map(Reservation =>(
                    <tr>
                        <th scope="row">#12353425322</th>
                            <td>Christian</td>
                            <td>Adriano</td>
                            <td>christian_empresa15@hotmail.com</td>
                            <td>Cancelar</td>
                    </tr>
                ))}
                
            </tbody>
        </table>         
    )
}

export default ReservationTable;