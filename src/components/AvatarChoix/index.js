import "./style.scss";
import "../../assets/VarClass.scss";


import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { saveAvatarImg } from "../../action/Avatar";

import Elephant_adulte from "../../assets/Pictures/Avatars/Elephant_adulte.png";
import Elephant_badass from "../../assets/Pictures/Avatars/Elephant_badass.png";
import Elephant_bebe from "../../assets/Pictures/Avatars/Elephant_bebe.png";
import Girafe_adulte from "../../assets/Pictures/Avatars/Girafe_adulte.png";
import Girafe_badass from "../../assets/Pictures/Avatars/Girafe_badass.png";
import Girafe_bebe from "../../assets/Pictures/Avatars/Girafe_bebe.png";
import Guepard_adulte from "../../assets/Pictures/Avatars/Guepard_adulte.png";
import Guepard_badass from "../../assets/Pictures/Avatars/Guepard_badass.png";
import Guepard_bebe from "../../assets/Pictures/Avatars/Guepard_bebe.png";
import Herisson_adulte from "../../assets/Pictures/Avatars/Herisson_adulte.png";
import Herisson_badass from "../../assets/Pictures/Avatars/Herisson_badass.png";
import Herisson_bebe from "../../assets/Pictures/Avatars/Herisson_bebe.png";
import Lion_adulte from "../../assets/Pictures/Avatars/Lion_adulte.png";
import Lion_badass from "../../assets/Pictures/Avatars/Lion_badass.png";
import Lion_bebe from "../../assets/Pictures/Avatars/Lion_bebe.png";
import Ours_adulte from "../../assets/Pictures/Avatars/Ours_adulte.png";
import Ours_badass from "../../assets/Pictures/Avatars/Ours_badass.png";
import Ours_bebe from "../../assets/Pictures/Avatars/Ours_bebe.png";
import Panda_adulte from "../../assets/Pictures/Avatars/Panda_adulte.png";
import Panda_badass from "../../assets/Pictures/Avatars/Panda_badass.png";
import Panda_bebe from "../../assets/Pictures/Avatars/Panda_bebe.png";
import Paresseux_adulte from "../../assets/Pictures/Avatars/Paresseux_adulte.png";
import Paresseux_badass from "../../assets/Pictures/Avatars/Paresseux_badass.png";
import Paresseux_bebe from "../../assets/Pictures/Avatars/Paresseux_bebe.png";
import Puma_adulte from "../../assets/Pictures/Avatars/Puma_adulte.png";
import Puma_badass from "../../assets/Pictures/Avatars/Puma_badass.png";
import Puma_bebe from "../../assets/Pictures/Avatars/Puma_bebe.png";
import Rhino_adulte from "../../assets/Pictures/Avatars/Rhino_adulte.png";
import Rhino_badass from "../../assets/Pictures/Avatars/Rhino_badass.png";
import Rhino_bebe from "../../assets/Pictures/Avatars/Rhino_bebe.png";
import Springbok_adulte from "../../assets/Pictures/Avatars/Springbok_adulte.png";
import Springbok_badass from "../../assets/Pictures/Avatars/Springbok_badass.png";
import Springbok_bebe from "../../assets/Pictures/Avatars/Springbok_bebe.png";
import Tigre_adulte from "../../assets/Pictures/Avatars/Tigre_adulte.png";
import Tigre_badass from "../../assets/Pictures/Avatars/Tigre_badass.png";
import Tigre_bebe from "../../assets/Pictures/Avatars/Tigre_bebe.png";

import "./style.scss";

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
  console.log('le tableau =>',tableauAvatar.indexOf);

  const dispatch = useDispatch();
  

  const handleAvatar = (event) => {
    dispatch(saveAvatarImg(event.target));
    const AvatarAll = document.querySelectorAll(".imgAvatar");
    for (const imgAvatar of AvatarAll) {
      imgAvatar.classList.remove('button_style--active');
    }
    event.target.classList.add("button_style--active");
    
  };

  return (
    <div>
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
