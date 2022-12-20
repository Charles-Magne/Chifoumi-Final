
import style from "./style.scss";

//les dependances
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// les composants
import AvatarChoix from "../AvatarChoix/index";

// les icones
import titre from "../../assets/Pictures/Titre/Pierre, feuille et Arnaques.png";
import flag from "../../assets/Icones/drapeau-france.svg";
import share from "../../assets/Icones/partager.png";
import info from "../../assets/Icones/informations.png";

// Les actions

import { savePseudo, savePseudoInvite } from "../../action/Avatar";
import { connectionWebSo, sendHoteName, requestHoteName } from "../../action/connection.js";

function Meetplayer() {

  const nameMJ = useSelector((state) => state.avatar.hote.valuePseudo); // le nom de l'hote toujours en haut
  const nameSelf = useSelector((state) => state.avatar.joueurSelf.valuePseudo); // si le nom du participant et le nom de l'hote son les memes alors on fait un
  const imgSelf = useSelector((state) => state.avatar.avatarImg);
  const salonState = useSelector((state) => state.salon.lobby);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // on lance les websockets
    dispatch(connectionWebSo());
    const divHote = document.querySelector(".div__link--invit"); // le lien d'invitation
    const divNonHote = document.querySelector(".contenerNonHote"); // le choix de l'avatar et du pseudo
    // la ternaire check si on a affaire à l'hote ou a un invité
    nameMJ === nameSelf
      ? (divHote.style.display = "flex")
      : (divNonHote.style.display = "flex");
      // Si je suis l'hote j'envoie mon nom a l'invité ------ si invité, je demende le name de l'hote
    nameMJ != "" ? dispatch(sendHoteName()) : dispatch(requestHoteName()) ;
      console.log('hote =>', nameMJ,'||','moi =>', nameSelf);
  }, []);

  //input du pseudo
  const pseudoValueInvite = (event) => {
    const inputlong = document.querySelector(".inputName");
    const alerteMore15 = document.querySelector(".alertLength");
    //ternaire pour check nb de characteres + 15
    inputlong.value.length == 15
      ? (alerteMore15.style.display = "flex")
      : (alerteMore15.style.display = "none");
    dispatch(savePseudoInvite(event.currentTarget.value, "valueName"));
  };

  // On permet a l'hote d'envoyer un lien aux autres participants
  const handleCopyLink = () => {
    console.log(salonState);
    navigator.clipboard.writeText(
      `http://localhost:8080/Send-invitation/${salonState}`
    );
  };

  // On envoie l'hote vers la page d'ecran de jeu
  const handleLaunchGame = () => {
    navigate("/Playing");
  };

  return (
    <div>
      <div className="pseudoBody">
        <div className="ad-1">pub1</div>
        <div className="contener-main">
          <div className="contener-header">
            <img className="logoTitre" src={titre} alt="Logo" />
            <button className="button__langue button_secondaire--desactive">
              <img className="drapeau" src={flag} alt="drapeau" />
            </button>
          </div>
          <div className="div__section-principal--inviter--joueur">
            <div className="div__roles--options">
              <div className="contain__role--options">
                <button className="Button__regles button_secondaire--desactive">
                  Régles
                </button>
                <button className="Button__options button_secondaire--active">
                  Options{" "}
                </button>
              </div>
              <div className="les_regles">
                <p className="P__astuces--1">comment gagner ?</p>
                <p className="P__astuces--2">d'autres trucs</p>
                <p className="P__astuces--3">encores des trucs</p>
              </div>
              <div className="les_options">
                <div>
                  <div className="div__Difficultéchoix titre--option">
                    Choisir la difficulté
                    <button className="button__difficulté button__difficulté--facile button_secondaire--desactive">
                      Je decouvre le jeu
                    </button>
                    <button className="button__difficulté button__difficulté--normal button_secondaire--active">
                      C'est bon, je connais
                    </button>
                    <button className="button__difficulté button__difficulté--difficile button_secondaire--desactive">
                      Temps de jeu = 5000 H
                    </button>
                  </div>
                  <h3 className="h3__nb_de_taupe titre--option">
                    Modifier le nb de taupe
                  </h3>
                  <div className="div__nbDeTaupe--choix">
                    <div className="choixTaupe">
                      <span>1</span>
                      <input
                        className="checkbox--taupe checkbox--taupe--1"
                        type="checkbox"
                        label="ca sert a quoi ?"
                        value={1}
                      />
                    </div>
                    <div className="choixTaupe">
                      <span>2</span>
                      <input
                        className="checkbox--taupe checkbox--taupe--2"
                        type="checkbox"
                        value={2}
                      />
                    </div>
                  </div>
                  <div className="div__gestionCarteAction titre--option">
                    Gerer les cartes puputes
                  </div>
                  <button className="button__carte--pupute button_secondaire--desactive">
                    Supprimer certaines cartes puputes
                  </button>
                  {/*<!--nb de carte total activé de facon dynamique--> */}
                  {/*-- astuces Checkbox (pas sur de l'integrer)-- 
                    -- selectioner les cartes que l'on veut =>  ouvre un menu avec une scrollbarre possibilité de sauvgarder les choix
                    -- activer le dialogue automatique (sans micro / c'est mieux de les avoir activé automatiquement) => checkBox --> */}
                </div>
              </div>
            </div>
            {/* *************************cette partie n'est visible que par les joueurs qui ne sont pas hote */}
            <div className="contenerNonHote">
              <div className="alertEmpty">Veuillez choisir un pseudo</div>
              <div className="alertLength">
                Attention, seulement 15 caractères
              </div>
              <form type="sumbit">
                <input
                  onChange={pseudoValueInvite}
                  value={nameSelf}
                  className="inputName"
                  maxLength="15"
                  placeholder="Pseudo"
                ></input>
              </form>
              < AvatarChoix />
              
            </div>
            {/********************************** cette partie n'est visible que par l'hote du jeu */}
            <button onClick={handleCopyLink} className="div__link--invit">
              <img
                className="img__icone--information"
                src={info}
                alt="Informations"
              />
              <div className="div__conseil--hide">
                <p>
                  Pour inviter d'autres joueurs, cliquer sur le bouton, puis
                  envoyer le code à vos amis.
                </p>
              </div>
              <p className="partage__titre">Cliquer pour copier le lien</p>
              <img className="img__partager" src={share} alt="icone-share" />
            </button>
            <div className="div__listeJoueurs">
              <h3 className="div__nbdejoueur">6 Joueurs</h3>
              {/*info dans le local storage */}
              <div className="Joueur__localStorageSelf">
                <img className="logo__joueursSelf" src={imgSelf} />
                <span className="Pseudo__joueurSelf">{nameMJ}</span>
                <p className="playerReady button_style--active">Pret</p>
                {/*pret ou non */}
                <p className="Hebergeur__salon"></p>
              </div>
              <div className="Joueur__sessionStorage">
                <img className="logo__joueurs" />
                <p className="Statut__joueur"></p>
                {/* pret ou non */}
                <p className="Hebergeur__salon"></p>
                {/*plutot une icone */}
              </div>
              <button
                href=""
                className="button__lancer__une__partie--2 button_style--active"
                onClick={handleLaunchGame}
              >
                Lancer la partie
              </button>
            </div>
          </div>
        </div>
        <div className="ad-2">pub2</div>
      </div>
    </div>
  );
}

export default Meetplayer;
