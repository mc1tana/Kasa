import { faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from '../../Component/Carousel/CarouselComponent';
import Footer from '../../Component/Footer/FooterComponent';
import Navigation from '../../Component/NavComponent/NavComponent';
import './Detail.css'
import recData from '../../utilities/recup';
function Detail() {
    const [image, setimage] = useState({});
    const location =useLocation();
    const [open, setopen] = useState(false);
    const [openDescription, setDescription] = useState(false);
	const [style, setstyle] = useState('30px');
	const navigate = useNavigate()
   useEffect(() => {
	recData().then(data=>setimage(data.find(e=> e.id === location.state)));  
	// redirection if id img not existing or url look as detailPhoto
	if(image==undefined){
		navigate("Kasa/NotFound")
		return
	}
   }, []);

   function star(nb){
    const nbWhite= 5-nb
    let idStar=1;
      let liststar=[];
      for (let index = 0; index < nb; index++) {
        liststar.push({color:'black',id:idStar});
        idStar++;
      }
      for (let i = 0; i <nbWhite ; i++) {
        liststar.push({color:'grey',id:idStar});
        idStar++;
      }
      return liststar
   }
   function openDetail(){
    setopen(!open);
	open==true? setstyle('30px'):setstyle('0px'); 
   }function openDescript(){
        setDescription(!openDescription)
   }
 if(image && image != {} && image.host){
    return ( 
        <div>
			{console.log(image)}
             <Navigation/>
            <main className="Detail">
            	{image.pictures && image.pictures.length >0 ? <Carousel Images={image.pictures}/> : ""}
              
                  <h2>{image.title ? image.title : ""}</h2>
                  <p className='location'> {image.location ? image.location : ""}</p>
                  <div className='tagStar'>
						<ul className='listTag'>
							{
								image.tags && image.tags.length>0 ?image.tags.map((elt)=>{
									return(
										<li key={elt}>{elt}</li>
									)
								}) : ''
							}
							
						</ul>
						<ul className='listStar'>
							{
							star && star.length>0 ?
							star(image.rating).map((elt)=>{
								return <li key={elt.id}><FontAwesomeIcon icon={faStar} style={{ color:elt.color, fontSize:'20px',marginRight:'13%' }} /></li>
							}) : ""
							}
						</ul>
						<div className='authorProfile'>
							   <p>{image.host.name && image.host.name ? image.host.name : ""}</p>  
							{image.host.picture ? <img src={image.host.picture} alt={"profil"+image.host.name}/> : ""}
						</div>
                  </div>
                  <div className='articles'>
                    <article className='description'>
                        <h4 onClick={openDetail} style={{marginBottom :style}}>Decription {open===true ? <FontAwesomeIcon icon={faChevronUp} />: <FontAwesomeIcon icon={faChevronDown}/>}</h4>
                        <p className={open==true? '': 'none'}>{image.description}</p>
                    </article>
                    <article className='equipment'>
                        <h4 onClick={openDescript}>Equipements {openDescription===true ? <FontAwesomeIcon icon={faChevronUp} />: <FontAwesomeIcon icon={faChevronDown}/>} </h4>
                        
                        <ul className={openDescription==true? '': 'none'}>
                            {
							image.equipments && image.equipments.length>0 ?image.equipments.map((equip)=>{
                                return(
                                    <li key={equip}>{equip}</li>
                                )
                            }) : ""
                            }
                        </ul>
                    </article>
                  </div>
            </main>
			<Footer/>
        </div>
    );}else{
        return (<div></div>)
    };
}

export default Detail;