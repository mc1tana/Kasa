import { Link} from "react-router-dom";
import Navigation from "../../Component/NavComponent/NavComponent";
import "./NotFound.css"

function NotFound() {

    return(
     <div className="NotFound">
        <Navigation/>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="ReturnAccueilLink">Retourner sur la page d’accueil</Link>
    </div>) ;
}

export default NotFound;