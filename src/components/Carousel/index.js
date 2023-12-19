import "./style.scss";

//les Actions
import { DomRef, clickCarousel, setTimer, setTimeDisplay, remaketime, changeTime } from "../../action/Carousel.js";

//Les dependances
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

//Les img
import taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import informateur from "../../assets/Pictures/Role/informateur Blue.png";
import joueur from "../../assets/Pictures/Role/joueur Blue.png";
import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";
import micro from "../../assets/Icones/micro.png";
import discord from "../../assets/Pictures/Titre/Discord-logo.png";
import WhatsApp from "../../assets/Pictures/Titre/WhatsAppIcone.png";
import Skype from "../../assets/Pictures/Titre/SkypeIcone.png";
import Messenger from "../../assets/Pictures/Titre/MessengerIcone.png";

function Carousel() {

  const dispatch = useDispatch();
  // ************************ les USeSelectors
  const focusButton = useSelector((state) => state.carousel.clicButton);
  /**
   * la variable qui contient le decompte du carousell. elle est inité par le state et lorsque qu'elle atteint 0 elle est reaffecté a time total. 10 s par ecran.
   */
  let timeDisplay = useSelector((state) => state.carousel.timerDisplay); // le temps qui s'ecoule et gere l'affichage

  /**
   * La valeur inital du total. sert a savoir ou on n'est dans le decompte.
   */
  const timerTotal = useSelector((state) => state.carousel.timerTotal); //le temps total

  const article1ref = useRef(null); 
  const article2ref = useRef(null); 
  const article3ref = useRef(null); 
  const article4ref = useRef(null); 
  const article5ref = useRef(null); 
  const LoadingButton1 = useRef(null); 
  const LoadingButton2 = useRef(null); 
  const LoadingButton3 = useRef(null); 
  const LoadingButton4 = useRef(null); 
  const LoadingButton5 = useRef(null); 

// Il semble que cette ligne ne serve a rien a virée
  const changeTimeDisplay = () => {
    console.log('on test le timer dans le returne du useEffect', timeDisplay);
    return timeDisplay;
  }

  // Le useEffect qui permet de querySelector Au chargement du Dom
  useEffect(() => {
    const regles = document.querySelectorAll(".article");

    console.log(" le queryselector", regles);
  }, []);


  /**
   * Desciptif : // Ici On est charger d'identifier la cilbe du clic et de le dispatcher au reducer
   * @param {*} event // On prends en param la class du button cible
   * @return < // La fonction n'a pas besoin de return une data
   */
  const handleClickCarousel = (event) => {
    const cible = event.target.id;
    dispatch(clickCarousel(cible));
    console.log('La cible du clic=>', cible, );
    console.log('L event du clic =>', event.target.id);

  };

  // ON checke le state pour savoir quoi afficher
  useEffect(() => {

    console.log('le useeffect pour les boutons');
 // En fonction du useselector qu'on recoit on modifie le dom
 if (focusButton == "LoadingButton1") {
   console.log('on clique sur le premier button');
  article1ref.current.style.display = "flex";
  article2ref.current.style.display = "none";
  article3ref.current.style.display = "none";
  article4ref.current.style.display = "none";
  article5ref.current.style.display = "none";
  LoadingButton1.current.classList.add('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
  dispatch(setTimer(timerTotal));
}
if (focusButton == "LoadingButton2") {
  console.log('**on clique sur le deuxieme button');
  article2ref.current.style.display = "flex";
  article1ref.current.style.display = "none";
  article3ref.current.style.display = "none";
  article4ref.current.style.display = "none";
  article5ref.current.style.display = "none";
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.add('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
  dispatch(setTimer(timerTotal/1.25));
}
if (focusButton == "LoadingButton3") {
  console.log('on clique sur le troisieme button');
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.add('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
  article3ref.current.style.display = "flex";
  article1ref.current.style.display = "none";
  article2ref.current.style.display = "none";
  article4ref.current.style.display = "none";
  article5ref.current.style.display = "none";
  dispatch(setTimer(Math.round(timerTotal/1.66)));

}
if (focusButton == "LoadingButton4") {
  console.log('on clique sur le quatrieme button');
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.add('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
  article4ref.current.style.display = "flex";
  article1ref.current.style.display = "none";
  article1ref.current.style.display = "none";
  article3ref.current.style.display = "none";
  article5ref.current.style.display = "none";
  dispatch(setTimer(timerTotal/2.5));
}
if (focusButton == "LoadingButton5") {
  console.log('on clique sur le cinquieme button');
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.add('buttonFocus');
  article5ref.current.style.display = "flex";
  article1ref.current.style.display = "none";
  article2ref.current.style.display = "none";
  article3ref.current.style.display = "none";
  article4ref.current.style.display = "none";
  dispatch(setTimer(timerTotal/5));
}
console.log('on test le timer dans le useEffect', timeDisplay);
changeTimeDisplay(timeDisplay);
  }, [focusButton]);
 

  
  console.log('*****en dehors de la variable, on test le timer et le state', timeDisplay);

  //! probleme ce code s'exectue sans se mettre a jour via le state
//! Pour l'instant l'ecoute du timer est ok, mais pas d'ecoute sur le state
// il faut avoir deux variable un useselector et un decompte
// Cette fonction s'execute toutes les 1 secondes
  const decompte = () => {
    console.log('*****a l\'interieur de la variable, on test le timer et le state', timeDisplay);
      let newValue = timeDisplay;
    
      console.log('le time display**',  timeDisplay, newValue);

    // lorsque le timer est egale au time referance d'une page on envoie une action
      // debut de la deuxieme card 48
      if (newValue === timerTotal/1.25 ) {
        dispatch(setTimer(timeDisplay));
        newValue = 47;
      }    
      // debut de la troisieme card 36
      else if (newValue === Math.round(timerTotal/1.66) ) {
        dispatch(setTimer(timeDisplay));
        newValue = 35;
      }    
      // debut de la quatrieme card 24
      else if (newValue === timerTotal/2.5 ) {
        dispatch(setTimer(timeDisplay));
        newValue = 23;
      }    
      // debut de la cinquieme card 12
      else if (newValue === timerTotal/5 ) {
        dispatch(setTimer(timeDisplay));
        newValue = 11;
      }    
      // remise a zero et debut de la premiere card
      else if (newValue === 0) {
        dispatch(setTimer(60));
        newValue = timerTotal;
      }
      
      newValue = newValue - 1;
      timeDisplay = newValue;
      return newValue;
    };

    useEffect(() => {
      const interval = setInterval(() => {
        decompte(timeDisplay);
      }, 1000);
      return () => {clearInterval(interval)};
    }, []);



// Ce useEffect analyse le temps et retourne le bon display en fonction
useEffect(() => {
  const div1 = document.querySelector('.article1');
    const div2 = document.querySelector('.article2');
    const div3 = document.querySelector('.article3');
    const div4 = document.querySelector('.article4');
    const div5 = document.querySelector('.article5');

// si timer est comprit entre 60 et timer total-12
if (timeDisplay == timerTotal) {
dispatch(setTimeDisplay("LoadingButton1"));
}
 if (timeDisplay == timerTotal && timeDisplay >= timerTotal/1.25) {
  console.log('on est sur le premier article');
  div1.style.display = "flex";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
  LoadingButton1.current.classList.add('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
}
//la deuxieme page
if (timeDisplay == timerTotal/1.25) {
  dispatch(setTimeDisplay("LoadingButton2"));
  }
if (timeDisplay < timerTotal/1.25 && timeDisplay > Math.round(timerTotal/1.66)) {
  console.log('on est sur le deuxieme article');
  div2.style.display = "flex";
  div1.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.add('buttonFocu');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
}
// la troisieme page
if (timeDisplay == Math.round(timerTotal/1.66)) {
  dispatch(setTimeDisplay("LoadingButton3"));
  console.log('la troisieme condition');
  }
if (timeDisplay == Math.round(timerTotal/1.66) && timeDisplay > timerTotal/2.5) {
  console.log('On est sur la troisieme card *****')
  div3.style.display = "flex";
  div1.style.display = "none";
  div2.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.add('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
}
// la quatrieme page
if (timeDisplay == timerTotal/2.5) {
  dispatch(setTimeDisplay("LoadingButton4"));
  }
if (timeDisplay == timerTotal/2.5 && timeDisplay > timerTotal/5) {
  div4.style.display = "flex";
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div5.style.display = "none";
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.add('buttonFocus');
  LoadingButton5.current.classList.remove('buttonFocus');
}
// la cinquieme page
if (timeDisplay == timerTotal/5) {
  dispatch(setTimeDisplay("LoadingButton5"));
  }
if (timeDisplay < timerTotal/5 && timeDisplay > 0) {
  div5.style.display = "flex";
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  LoadingButton1.current.classList.remove('buttonFocus');
  LoadingButton2.current.classList.remove('buttonFocus');
  LoadingButton3.current.classList.remove('buttonFocus');
  LoadingButton4.current.classList.remove('buttonFocus');
  LoadingButton5.current.classList.add('buttonFocus');
}
if (timeDisplay == 0) {
  //dispatch(remaketime());
  //return timeDisplay = 60;
}
}, [timeDisplay]);
 

  return (
    <div>
      <div className="carouselContenerMaine">
        <div ref={article1ref} className="article1 article carouselContener">
          <span className="titre">
            Au debut de la partie, les participants sont assignés a un role :
          </span>
          <div className="role">
            <img className="iconeRole" src={taupe} alt="IconeTaupe" />
            <span className="RoleName">L'arnaqueur</span>
          </div>
          <div className="role">
            <img
              className="iconeRole"
              src={informateur}
              alt="IconeInformateur"
            />
            <span className="RoleName">Les informateurs</span>
          </div>
          <div className="role">
            <img className="iconeRole" src={joueur} alt="IconeJoueur" />
            <span className="RoleName">Les joueurs</span>
          </div>
        </div>
        {/* ****************Ici c'est le deuxieme article*****************************  */}

        <div ref={article2ref} className="article2 article carouselContener">
          <div className="titreRegleContener2">
            <img
              className="iconeTaupe2 iconeRoleAll"
              src={taupe}
              alt="iconeTaupe"
            />
            <span className="titreRegle2">
              L'arnaqueur va recevoir un symbole à defendre
            </span>
          </div>
          <span className="DansCeCasLa">Par exemple :</span>
          <div className="cardExemple2">
            <img className="CardSymbole" src={Pierre} alt="cardPierre" />
            <img
              className="CardSymbole cardRed"
              src={Feuille}
              alt="cardFeuille"
            />
            <img className="CardSymbole" src={Ciseaux} alt="cardCiseaux" />
          </div>
          <span className="DansCeCasLa">
            Dans ce cas la, l'arnaqueur va devoir inciter les joueurs à jouer les
            symboles perdant face a la feuille.
          </span>
          <div className="cardExemple2">
            <img
              className="CardSymbole cardJaune"
              src={Pierre}
              alt="cardPierre"
            />
            <img
              className="CardSymbole cardJaune"
              src={Feuille}
              alt="cardFeuille"
            />
            <img className="CardSymbole" src={Ciseaux} alt="cardCiseaux" />
          </div>
          <span className="DansCeCasLa policebig">
            Plus les joueurs se trompent,
          </span>
          <span className="DansCeCasLa policebig">
            Plus l'arnaqueur gagne de points
          </span>
        </div>
        {/* ****************Ici c'est le Troisieme article*****************************  */}
        <div ref={article3ref} className="article3 article carouselContener">
          <div className="titreRegleContener2">
            <img
              className="iconeTaupe2 iconeRoleAll"
              src={informateur}
              alt="iconeTaupe"
            />
            <span className="titreRegle2">
              Les deux Informateurs voient chacun une carte perdante
            </span>
          </div>
          <span className="DansCeCasLa">Par exemple :</span>
          <div className="cardExemple2">
            <img
              className="CardSymbole cardRed"
              src={Pierre}
              alt="cardPierre"
            />
          </div>
          <span className="DansCeCasLa">
            Les Informateurs doivent aider les joueurs a gagner en les incitant
            a jouer la bonne carte .
          </span>
          <img className="imgRole iconeRoleAll" src={taupe} alt="iconeTaupe" />
          <span className="DansCeCasLa">
            Mais attention, l'arnaqueur va esseyer de se faire passer pour les
            informateurs afin inciter les joueurs a jouer le mauvais symbole.
          </span>
        </div>
        {/* ****************Ici c'est le quatrieme article*****************************  */}
        <div ref={article4ref} className="article4 article carouselContener">
          <div className="titreRegleContener2">
            <img
              className="iconeTaupe2 iconeRoleAll"
              src={joueur}
              alt="iconeJoueur"
            />
            <span className="titreRegle2">
              Les joueurs doivent jouer le symbole qui bat celui de l'arnaqueur
            </span>
          </div>
          <span className="DansCeCasLa">
            Par exemple, si l'arnaqueur défends :
          </span>
          <img
            className="CardSymbole cardRed sautDeLigne"
            src={Feuille}
            alt="cardFeuille"
          />
          <span className="DansCeCasLa">Les joueurs doivent jouer :</span>
          <img
            className="CardSymbole sautDeLigne"
            src={Ciseaux}
            alt="cardCiseaux"
          />
          <span className="DansCeCasLa">
            Les joueurs devront aussi repérer les informateurs pour savoir
            quelle carte jouer.
          </span>
        </div>
        {/* ****************Ici c'est le Cinquieme article*****************************  */}
        <div ref={article5ref} className="article5 article carouselContener">
          <div className="titreRegleContener2">
            <span className="titreRegle2">
              Pierre, Feuille et Arnaques est un jeu qui se joue en vocal
            </span>
          </div>
          <img
            className="iconeTaupe2 iconeRoleAll sautDeLigne"
            src={micro}
            alt="MicroIcone"
          />
          <span className="DansCeCasLa sautDeLigne">
            Pour un confort optimal, nous vous recommandons d'utiliser Discord
          </span>
          <img
            className="iconeTaupe2 iconeDiscord sautDeLigne"
            src={discord}
            alt="DiscordLogo"
          />
          <a
            href="https://discord.com/"
            target="blank"
            className="titreRegle2 sautDeLigne souligné"
          >
            Lien vers discord
          </a>
          <span className="DansCeCasLa sautDeLigne">
            Mais vous pouvez egalement utiliser pleins d'autres platformes:
          </span>
          <div>
            <img
              className="iconeTaupe2 iconeSkype sautDeLigne"
              src={Skype}
              alt="SkypeLogo"
            />
            <img
              className="iconeTaupe2 iconeWhatsapp sautDeLigne"
              src={WhatsApp}
              alt="whatsappLogo"
            />
            <img
              className="iconeTaupe2 iconeMessenger sautDeLigne"
              src={Messenger}
              alt="MessengerLogo"
            />
          </div>
        </div>
        <div className="contenereTimerbar">
          <div ref={LoadingButton1} onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton1"></div>
          <div ref={LoadingButton2} onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton2"></div>
          <div ref={LoadingButton3} onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton3"></div>
          <div ref={LoadingButton4} onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton4"></div>
          <div ref={LoadingButton5} onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton5"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
