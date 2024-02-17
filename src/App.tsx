import Header from './View/Components/Design/Header/Index';
import Footer from './View/Components/Design/Footer/Index';
import Rout from './Controller/ControllerRouter';
import { LoginProvider } from './View/Components/Services/LoginProvider';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <LoginProvider>
        <Header/>
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <div>
          
            <Rout />
          
          </div>
        </div>
      </LoginProvider>
      <Footer/>
    </div>
  );
}

export default App;
