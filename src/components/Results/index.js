import style from "./style.scss";

//Les imgs
import taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import avatarProvisoire from"../../assets/Pictures/Avatars/Lion_adulte.png";
import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";
import player from "../../assets/Pictures/Role/joueur Blue.png";
import Taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import Informateur from "../../assets/Pictures/Role/informateur Blue.png";

function Results() {
  return(
    <div>
      {/*     <!--pouvoir faire remonter les bugs ou les points a ameliorer !! Attention au insersion de sql-->
    <!--IL faut placer les joueurs et les informateurs dans une booucle forEatch-->
        <!--ici on affiche la ou les deux taupes--> */}

        <div class="div__les__taupes--contain--1">
            <div class="div__role--main">
                <img class="icone_taupe" src={ taupe } alt="icone Taupe" />
            </div>
            <div class="div__PseudoImg--Taupe">
                <span class="span__pseudo">pseudo</span>
                <img class="img__Avatar" src={ avatarProvisoire } alt="Img Avatar" />
            </div>
            <div class="div__symboles--taupe">
                <img class="carte__pierre carte__symbole" src={ Pierre } alt="Icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné" src={ Feuille } alt="Icone Feuille" />
                <img class="carte__ciseau carte__symbole" src={ Ciseaux } alt="Icone ciseaux" />
            </div>
        </div>
        <div class="compteurTaupe">
            <div class="scoreTaupe">10</div>
        </div>
        { /*  <!--ici on affiche les deux informateurs--> */}
  
    <div class="contener__informateur">
        <div class="div__Informateurs">
            <div class="contener__icone__informateur">
                <img class="icone__informateur" src={ Informateur } alt="icone Informateur" />
            </div>
            <div class="contenerPersoInformateur">
                <span class="pseudoInformateur">Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurInformateurs">
            <div class="scoreInformateur">10</div>
            </div>
        </div>
        
        <div class="div__Informateurs">
            <div class="contener__icone__informateur">
                <img class="icone__informateur" src={ Informateur } alt="icone informateur" />
            </div>
            <div class="contenerPersoInformateur">
                <span class="pseudoInformateur">Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurInformateurs">
            <div class="scoreInformateur">10</div>
            </div>
        </div>
        
    </div>
    <div class="contener__player">
        { /*  <!--ici on affiche tous les joueurs--> */}
        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        <div class="div__player">
            <div class="contener__icone__player">
                <img class="icone__player" src={ player } alt="img player" />
            </div>
            <div class="contenerPseudoPlayer">
                <span class="pseudoPlayer" >Pseudo</span>
                <img class="img__informateur--1" src={ avatarProvisoire } alt="img__avatar" />
            </div>
            <div class="contener__card">
                <img class="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img class="carte__feuille carte__symbole-Selectionné__informateur" src={ Feuille } alt="icone Feuille" />
                <img class="carte__ciseau carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div class="compteurPlayer">
            <div class="scorePlayer">10</div>
            </div>
        </div>

        
        
        
    </div>
    <button class="button_style--active buttonNewPartie" >Nouvelle Partie</button>
    </div>
  );
}

export default Results;
