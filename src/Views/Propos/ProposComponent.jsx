import Card from '../../Component/Card/CardComponent';
import Footer from '../../Component/Footer/FooterComponent';
import Navigation from '../../Component/NavComponent/NavComponent';
import './Propos.css'
function Propos() {
    return ( 
        <div>
            <Navigation/>
            <main className="Propos">
                <div className="picturePropos">
                   <img src="/Kasa/Images/Paysage-Montagne.png" alt="paysage montagneux avec foret en premier plan" />
                </div>
                <div className='articles'>
                    <Card titleCard={'Fiabilité'} descriptionCard={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
                    <Card titleCard={'Respect'} descriptionCard={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                    <Card titleCard={'Service'} descriptionCard={'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}/>
                    <Card titleCard={'Securité'} descriptionCard={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}/>
                </div>
            </main>
            <Footer/>
        </div>
     );
}

export default Propos;