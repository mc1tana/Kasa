import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
function Card({titleCard, descriptionCard}) {
    const [open, setopen] = useState(false);
    const [style, setstyle] = useState('30px');
    function openDetail(){
        setopen(!open);
        open==true? setstyle('30px'):setstyle('0px'); 
       }
    return ( <article className='description'>
                <h4 onClick={openDetail} style={{marginBottom :style}}>{titleCard} {open===true ? <FontAwesomeIcon icon={faChevronUp} />: <FontAwesomeIcon icon={faChevronDown}/>}</h4>
                <p className={open==true? '': 'none'}>{descriptionCard}</p>
            </article>
 );
}

export default Card;