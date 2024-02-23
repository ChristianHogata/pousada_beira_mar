import { useLogin } from '../../Services/LoginProvider';
import './Header.css';

function Header() {
    const { loggedIn } = useLogin();

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/search">Pousada Beira Mar</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03"></div>
                    {loggedIn && <form className="d-flex ms-auto me-2" role="search" action='/myReservation'>
                        <button className="btn btn-secondary" type="submit"><a className="navbar-brand">Minhas Reservas</a></button>
                    </form>}
                    {loggedIn && <form className="d-flex ms-auto" role="search" action='/'>
                        <button className="btn btn-secondary" onClick={() => sessionStorage.removeItem('loggedIn')} type="submit"><a className="navbar-brand">Sair</a></button>
                    </form>}
                </div>
            </nav>
        </div>

    );

}

export default Header;