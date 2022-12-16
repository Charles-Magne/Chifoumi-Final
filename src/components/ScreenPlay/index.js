import "./style.scss";

// les img
 import player from "../../assets/Pictures/Role/joueur Blue.png";
 import Taupe from "../../assets/Pictures/Role/Taupel Blue.png";
 import Informateur from "../../assets/Pictures/Role/informateur Blue.png";
 import arrowDown from "../../assets/Icones/down-arrow.png";
 import ile from "../../assets/Pictures/Carte pupute/Hawail_blue.png";
 import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
 import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
 import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";
 import avatarProvisoire from"../../assets/Pictures/Avatars/Lion_adulte.png";

//Les dependances
import { useEffect } from "react";



function ScreenPlay() {

  useEffect(() => {
// Il faut definir le role de l'utilisateur, puis sa carte pupute, puis si taupe sa carte à defendre ou si informateur la carte perdante 
/*Pour definir les roles, on defini un randown math a tous les joueurs et celui qui a la plus elevé est la taupe, les deux moins grands sont informateurs */
/*pour definir la carte pupute un random math sert a attribuer la carte 
faire un loading si jamais les calcules prennent du temps.
*/
console.log('le useeffect du sceenplay');
  }, []);

  return (
    <div>
       <div className="div__section-principal--ecran--de--jeu">
            <div className="div__chronoetdialogue">
            <div className="div__chrono"></div>
                <div className="ringChrono">
                    <div className="Chrono__Color"></div>
                </div>
                {/*<!--Css animation ring ?--> */}
                {/*<div className="div__dialogue">boite a blabla</div> a dev pour l'aprés MVP */}
            </div>
            <div className="div__centrale">
                <div className="Conseil_role">
                    <img src={ player } alt="icone Role" className="icone__titre"/>
                    {/*<!--Icone role--> */}
                    <h1 className="Role__titre">Taupe</h1>
                    <div className="div__consigne--openregle" >
                        <p className="Conseil-role_p">.</p>
                        <img className="icone__ouvrir--conseil" src={ arrowDown } alt="iconeArrow" />
                    </div>
                    <p className="consignesCompletesHide" >Vous voyez l'une des deux cartes perdantes. Faites en sorte que les joueurs ne jouent pas cette carte.</p>
                </div>
                <div className="carte_pupute">
                    <img className="symoble__mini__haut__gauche" src={ ile } alt="iconeCarteAction" />
                    <img className="symbole__action" src={ ile } alt="iconeCarteAction" />
                    {/*<!--Img centrale--> */}
                    <p className="titre__carte__action"></p>
                    {/*<!--titre de la carte--> */}
                    <span className="description__carte"></span>
                   {/* <!--Commentaire de la carte--> */}
                    <img className="symoble__mini__bas__droite" src={ ile } alt="iconeCarteAction" />
                </div>
                <div className="div__choixdelacarte">
                    <button className="div__cartePierre button__carte button_style--active">
                    <img className="image_symbole--up" src={ Pierre } alt="SymboleCiseau" />
                        <img className="image_symbole" src={ Pierre } alt="SymbolePierre" />
                        <div className="texteSymbole" >Pierre</div>
                        <div className="contenerImgDown" >
                        <img className="image_symbole--Down" src={ Pierre } alt="SymboleCiseau" />
                        </div>
                    </button>
                    <button className="div__carteFeuille button__carte button_style--active">
                    <img className="image_symbole--up" src={ Feuille } alt="SymboleCiseau" />
                        <img className="image_symbole" src={ Feuille } alt="SymboleFeuille" />
                        <div className="texteSymbole" >Feuille</div>
                        <div className="contenerImgDown" >
                        <img className="image_symbole--Down" src={ Feuille } alt="SymboleCiseau" />
                        </div>
                    </button>
                    <button className="div__carteCiseaux button__carte button_style--active">
                    <img className="image_symbole--up" src={ Ciseaux } alt="SymboleCiseau" />
                        <img className="image_symbole" src={ Ciseaux } alt="SymboleCiseau" />
                        <div className="texteSymbole" >Ciseau</div>
                        <div className="contenerImgDown" >
                        <img className="image_symbole--Down" src={ Ciseaux } alt="SymboleCiseau" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="div__joueurs--roles--liste">
                <div className="joueur_local">
                    <img className="avatar__joueur" src={ avatarProvisoire } alt="Avatar" />
                    <div className="container__nameuser--button">
                        <p className="Pseudo__joueur">joueur 1</p>
                        <div className="div__button--role">
                            <button className="button__role">
                                <img className="img__Role" src={ player }  alt="role" />
                            </button>
                            <button>
                                <img className="img__Role" src={ Informateur }  alt="role" />
                            </button>
                            <button>
                                <img className="img__Role" src={ Taupe } alt="role" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ScreenPlay;
