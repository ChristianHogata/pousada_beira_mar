import React, { useState } from 'react';

function Header() {
    const [search, setSearch] = useState();
  
    const handleSearchChange = (e:any) => {
      setSearch(e.target.value);
    };
 
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pousada Beira Mar</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03"></div>
                    <form className="d-flex ms-auto" role="search">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" value={search} onChange={handleSearchChange}></input>
                        <button className="btn btn-light" type="button"><a className="navbar-brand" href={`/search/reservation/${search}`}>Pesquisar</a></button>
                    </form>
                </div>
            </nav>         
        </div>
    );

}

export default Header;