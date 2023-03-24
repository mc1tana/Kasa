import { Link } from "react-router-dom";
import './NavComponent.css';

function Navigation() {
    return ( 
       <nav>
            <img src="/kasa/Images/LogoCasa.png" alt="logo Casa" />
            <div>
                  <Link to="/">Accueil</Link>
                  <Link to="/Propos"> Propos</Link>
            </div>
           
       </nav>
     );
}

export default Navigation;