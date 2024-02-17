import React, { useState } from 'react';
import { useLogin } from '../../Services/LoginProvider';

function Header() {
    const { loggedIn } = useLogin(); 
 
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/search">Pousada Beira Mar</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03"></div>
                    {loggedIn &&<form className="d-flex ms-auto" role="search" action='/myReservation'>
                        <button className="btn btn-secondary" type="submit"><a className="navbar-brand">Minhas Reservas</a></button>
                    </form>}
                </div>
            </nav>         
        </div>
    );

}

export default Header;