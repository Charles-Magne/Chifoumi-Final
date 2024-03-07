import "./style.scss";
import "../../assets/VarClass.scss";


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveAvatarImg, saveAvatarImgInvit } from "../../action/Avatar";

import Elephant_adulte from "../../assets/Pictures/Avatars/Elephant_adulte.svg";
import Elephant_badass from "../../assets/Pictures/Avatars/Elephant_badass.svg";
import Elephant_bebe from "../../assets/Pictures/Avatars/Elephant_bebe.svg";
import Girafe_adulte from "../../assets/Pictures/Avatars/Girafe_adulte.svg";
import Girafe_bebe from "../../assets/Pictures/Avatars/Girafe_bebe.svg";
import Guepard_bebe from "../../assets/Pictures/Avatars/Guepard_bebe.svg";
import Herisson_adulte from "../../assets/Pictures/Avatars/Herisson_adulte.svg";
import Herisson_badass from "../../assets/Pictures/Avatars/Herisson_badass.svg";
import Herisson_bebe from "../../assets/Pictures/Avatars/Herisson_bebe.svg";
import Lion_adulte from "../../assets/Pictures/Avatars/Lion_adulte.svg";
import Lion_badass from "../../assets/Pictures/Avatars/Lion_badass.svg";
import Ours_adulte from "../../assets/Pictures/Avatars/Ours_adulte.svg";
import Ours_badass from "../../assets/Pictures/Avatars/Ours_badass.svg";
import Ours_bebe from "../../assets/Pictures/Avatars/Ours_bebe.svg";
import Panda_adulte from "../../assets/Pictures/Avatars/Panda_adulte.svg";
import Panda_badass from "../../assets/Pictures/Avatars/Panda_badass.svg";
import Panda_bebe from "../../assets/Pictures/Avatars/Panda_bebe.svg";
import Rhino_adulte from "../../assets/Pictures/Avatars/Rhino_adulte.svg";
import Rhino_badass from "../../assets/Pictures/Avatars/Rhino_badass.svg";
import Rhino_bebe from "../../assets/Pictures/Avatars/Rhino_bebe.svg";
import Springbok_bebe from "../../assets/Pictures/Avatars/Springbok_bebe.svg";
import Tigre_adulte from "../../assets/Pictures/Avatars/Tigre_adulte.svg";
import Tigre_badass from "../../assets/Pictures/Avatars/Tigre_badass.svg";
import Tigre_bebe from "../../assets/Pictures/Avatars/Tigre_bebe.svg";
import waitingIconeSelf from "../../assets/Icones/waiting_blanc.png";
import readyIconeSelf from "../../assets/Icones/ready_blanc.png";

function AvatarChoix() {

  const tableauAvatar = [
    Elephant_adulte,
    Elephant_badass,
    Elephant_bebe,
    Girafe_adulte,
    Girafe_bebe,
    Guepard_bebe,
    Herisson_adulte,
    Herisson_badass,
    Herisson_bebe,
    Lion_adulte,
    Lion_badass,
    Ours_adulte,
    Ours_badass,
    Ours_bebe,
    Panda_adulte,
    Panda_badass,
    Panda_bebe,
    Rhino_adulte,
    Rhino_badass,
    Rhino_bebe,
    Springbok_bebe,
    Tigre_adulte,
    Tigre_badass,
    Tigre_bebe,
  ];


  const dispatch = useDispatch();
  
// Il faut identifier si c'est l'hote ou l'inviter
const nameMJ = useSelector((state) => state.avatar.hote.valuePseudo); // le nom de l'hote toujours en haut
  const imgMJ = useSelector((state) => state.avatar.hote.avatarImgHote); // l'img de l'hote toujours en haut
  const nameSelf = useSelector((state) => state.avatar.joueurSelf.valuePseudo); // si le nom du participant et le nom de l'hote son les memes alors on fait un
  const indexPlayer = useSelector((state) => state.avatar.joueurSelf.inumber);

  //Ici on verifie que les infos sont entrer
  const PseudoTarget = document.querySelector(".PseudoSelfTrue");
  const imgSelf = useSelector((state) => state.avatar.joueurSelf.avatarImg); //img joueur Self
  const waitingSelf = document.querySelector(".playerWaitingSelf");
  const readySelf = document.querySelector(".playerReadySelf");



  // la ternaire check si hote ou invité pour gerer affichage
   const handleAvatar = (event) => {
     //  si c'est l'hote on envoie lmig cible dans le state ou un invité pour savoir ou placer l'img choisi
     document.location.pathname == "/" ? ( dispatch(saveAvatarImg(event.target.src) ) ) : ( dispatch(saveAvatarImgInvit(event.target.src, indexPlayer )) );
     //la on verifie sur quelle page on se trouve
     if ( document.location.pathname !== "/" && !PseudoTarget.textContent.trim() ) {
        console.log('la condition est ok', PseudoTarget, ' le textContent =>', PseudoTarget.textContent );
     }
     else if ( document.location.pathname !== "/" && PseudoTarget.textContent ) {
       //ici on indique que le joueur est pret
      console.log('la condition est pas valide', PseudoTarget, ' le textContent =>', PseudoTarget.textContent );
      waitingSelf.style.display = "none";
      readySelf.style.display = "flex";
     }
     
    const AvatarAll = document.querySelectorAll(".imgAvatar");
    for (const imgAvatar of AvatarAll) {
      imgAvatar.classList.remove('button_style--active');
    }
    event.target.classList.add("button_style--active");
    
  }  

  return (
    <div className="avatarContenerMain">
      <div className="avatarContener">
        <div className="wrapperAvatarImg">
          {tableauAvatar.map((tableauAvatar) => (
            <img
            key={tableauAvatar}
              onClick={handleAvatar}
              className="imgAvatar"
              src={tableauAvatar}
              alt="imgAvatar"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvatarChoix;
