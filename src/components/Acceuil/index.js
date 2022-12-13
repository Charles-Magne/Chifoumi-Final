import "./style.scss";
// les dependances
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//les actions
import { savePseudo } from '../../action/Avatar';

//les imgs
import background from "../../assets/Pictures/Fond-decran/Background.png";
import titre from "../../assets/Pictures/Titre/Pierre, feuille et Arnaques.png";

//les composants
import Carousel from "../Carousel";
import AvatarChoix from "../AvatarChoix";


function Accueil() {

   const dispatch = useDispatch();
   const navigate = useNavigate();

const pseudoValue = (event) => {
  dispatch(savePseudo(event.currentTarget.value, "valueName"));
};


const valueName = useSelector ((state) => state.valuePseudo);


const HandelLaunch = (event) => {
  console.log(valueName);
    // Ici Une ternaire qui gere l'affichage de la deuxieme location si nul => on affiche rien
    //const checkPseudo = 
    //const checkPseudo = srcanimaux.locations[1] == undefined ? "" : srcanimaux.locations[1];
    //navigate('/Send-invitation');

}

  return (
    <div>
      <div>
        <img className="imgTitre" src={titre} alt="titre" />
      </div>
      <div className="contenaireMain">
        <div className="Pub-left">pub1</div>
        <div className="reglePseudoButton">
          <div className="reglePseudo">
            <div className="contenerRegle">
              <h1 className="titreRegle">
                Jouez à plusieurs au célebre jeu du chifoumi
              </h1>
              <h2 className="soustitreRegle">
                Attention, tous les coups sont permis
              </h2>
              <Carousel/>
            </div>
            <div className="contenerPseudo">
              <form type="sumbit" >
              <input onChange={pseudoValue} value={valueName} className="inputName" placeholder="Pseudo"></input>
              </form>
              <AvatarChoix/>
            </div>
          </div>
          <div className="ContenerButton">
            <button onClick={ HandelLaunch } className="buttonLaunch">Lancer une partie</button>
          </div>
        </div>
        <div className="Pub-right">pub2</div>
      </div>
    </div>
  );
}

export default Accueil;
