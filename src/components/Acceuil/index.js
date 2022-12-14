import "./style.scss";
// les dependances
import { useDispatch, useSelector } from "react-redux";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//les actions
import { savePseudo } from '../../action/Avatar';

//les imgs
import background from "../../assets/Pictures/Fond-decran/Background.png";
import titre from "../../assets/Pictures/Titre/Pierre, feuille et Arnaques.png";

//les composants
import Carousel from "../Carousel";
import AvatarChoix from "../AvatarChoix";

// Les actions
import { fetchCodeSalon } from "../../action/Salon";



function Accueil() {
// On envoie le code du salon vers le state pour gerer la redirection
  useEffect(() => {
    const salon = Math.round(Math.random()*10000000000000000);
    dispatch(fetchCodeSalon(salon));
  }, []);

  // On import le code du salon
  const salonState = useSelector((state) => state.salon.lobby);
  const valueName = useSelector ((state) => state.avatar.valuePseudo);
  const avatarImg = useSelector ((state) => state.avatar.avatarImg);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   

//input du pseudo
const pseudoValue = (event) => {
  const inputlong = document.querySelector('.inputName');
  const alerteMore15 = document.querySelector(".alertLength");
  //ternaire pour check nb de characteres + 15
   inputlong.value.length == 15 ? alerteMore15.style.display = "flex" : alerteMore15.style.display = "none";
  dispatch(savePseudo(event.currentTarget.value, "valueName"));
};

//Clic sur le lancer une partie
const HandelLaunch = ( ) => {
const alerteAvatar = document.querySelector(".alertAvatarEmpty");
const alertePseudo = document.querySelector(".alertEmpty");
    // ternaire pour checker si le pseudo est rempli
    const checkPseudo = valueName == '' ? alertePseudo.style.display = "flex" : alertePseudo.style.display = "flex";
    // ternaire pour checker si un avatar a etait choisi
    const checkAvatar = avatarImg == undefined ? alerteAvatar.style.display = "flex" : alerteAvatar.style.display = "none";
    // ternaire pour savoir si on peut passer a la page suivante
    const nextPage = avatarImg != undefined && valueName != '' ?  navigate(`Send-invitation/${salonState}`)  : '' ; 
    console.log('l url',salonState); 
    ;

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
            <div className="alertEmpty" >Veuillez choisir un pseudo</div>
              <div className="alertLength" >Attention, seulement 15 caractères</div>
              <form type="sumbit" >
              <input onChange={pseudoValue} value={valueName} className="inputName" maxLength="15" placeholder="Pseudo"></input>
              </form>
              <div className="alertAvatarEmpty" >Veuillez choisir un avatar</div>
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
