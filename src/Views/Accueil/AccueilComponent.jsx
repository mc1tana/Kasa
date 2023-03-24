import Navigation from "../../Component/NavComponent/NavComponent";
import { useState, useEffect} from 'react';
import "./Accueil.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/FooterComponent";
import recData from "../../utilities/recup.js"
function Accueil() {
    const [Images, setImages] = useState([]);
    const navig = useNavigate();
    useEffect(() => {
        recData().then(data=>setImages(data));  
        // fetch("/data/Data.json").then(resp=>resp.json()).then(data=>setImages(data));
        
    }, []);
    function detail(e){
       navig('/DetailPhoto',{state:e.target.id})
    }
    return  (
        <div>
            <Navigation/>
            <main className="Accueil">
                <div className="pictureAccueil">
                   <img  className="imageAccueil" src="/Images/photoRecif.png" alt="recif" />
                   <p>Chez vous, partout et ailleurs</p>
                </div>
                   <ul className="listImageAcceuil">
                   {Images.map((img)=>{
                        return <li key={img.id} onClick={detail} ><img id={img.id} src={img.cover} alt={img.description}/><p className="titleImage">{img.title}</p></li>;
                   })}
                   </ul>
                   
                
            </main>
            <Footer/>
        </div>
    );

}

export default Accueil;