import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './Carousel.css';
function Carousel({Images}) {
    
        const [CurrentImg, setCurrentImg] = useState([]);//byukfguyfvytufg
        const [loading, setloading] = useState(true);
        useEffect(() => {
            
            setCurrentImg([...Images][0])
        }, []);
        const [compt, setcompt] = useState(0);
        function ActionLeft(){
            if(compt<= 0){
                setCurrentImg([...Images][[...Images].length-1])
                setcompt(([...Images].length)-1)
                return
            }else{
            setCurrentImg(Images[compt-1])           
            setcompt(compt-1)
            return}
        }
         function ActionRight(){
            if(compt>= [...Images].length-1){
                setCurrentImg([...Images][0])
                setcompt(0)
                return
            }else{
            setCurrentImg([...Images][compt+1])
            let a=compt+1
            setcompt(a)
            return}
        }
    return ( 
        <div className="Carousel">
           {CurrentImg ? <img alt='' src={CurrentImg} /> : ""}
            <FontAwesomeIcon onClick={ActionLeft} className='left' icon={faChevronLeft}  style={{width : "50px",height:"50px"}}/>
            <FontAwesomeIcon onClick={ActionRight}className="right" icon={faChevronRight} style={{width : "50px",height:"50px"}}/>
        </div>
     );
}

export default Carousel;