import React from 'react';
import Header from './View/Components/Design/Header/Index';
import Footer from './View/Components/Design/Footer/Index';
import SendForm from './View/Components/Design/Send Form/Index';
import Rout from './Router';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header/>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div>
          <Rout/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
