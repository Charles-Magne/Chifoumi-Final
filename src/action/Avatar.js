
//Gere la value du pseudo name
export const PSEUDO_VALUE_INVITE = 'PSEUDO_VALUE_INVITE';

export function savePseudoInvite (value, field) {
  return {
type : PSEUDO_VALUE_INVITE,
value,
field,
  };
}


//Sert a envoyer notre pseudo aux autres joueurs
export const SEND_NAME_SELF = 'SEND_NAME_SELF';

export function sendNameself (index, name) {
  return {
type : SEND_NAME_SELF,
index,
name
  };
}



//Gere le nombre de joueur
export const SAVE_NB_PLAYER = 'SAVE_NB_PLAYER';

export function SaveNbPlayer (index) {
  return {
type : SAVE_NB_PLAYER,
index
  };
}

// save l'img de l'hote
export const SAVE_AVATAR_IMG = 'SAVE_AVATAR_IMG';

export function saveAvatarImg ( target ) {
  return {
    type: SAVE_AVATAR_IMG, 
    target,
  };
}

// save l'img de l'invité
export const SAVE_AVATAR_IMG_INVIT = 'SAVE_AVATAR_IMG_INVIT';

export function saveAvatarImgInvit ( target, indexPlayer ) {
  return {
    type: SAVE_AVATAR_IMG_INVIT, 
    target,
    indexPlayer
  };
}

//save le pseudo de l'hote
export const SAVE_PSEUDO_HOTE = 'SAVE_PSEUDO_HOTE';

export function savePseudoHote (value, field) { 
  return {
type : SAVE_PSEUDO_HOTE,
value, 
field,
  };
}

/************************************lorsque on se connecte on envoit notre indexRandom au server,
 *  on save notre index random et on le recupere avec l'index pour l'enregistrer dans le reducer  */


 //save l'index et l'indexRandom du joueur lui meme qui vient de se connecter sur le salon
export const SAVE_PLAYER_SELF_INDEX = 'SAVE_PLAYER_SELF_INDEX';

export function SaveplayerSelfIndex (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_SELF_INDEX,
i,
numberRandomPlayer
  };
}


//save l'index et l'indexRandom du joueur 1 qui vient de se connecter sur le salon
export const SAVE_PLAYER_1_INDEX = 'SAVE_PLAYER_1_INDEX';

export function Saveplayer1Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_1_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 2 qui vient de se connecter sur le salon
export const SAVE_PLAYER_2_INDEX = 'SAVE_PLAYER_2_INDEX';

export function Saveplayer2Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_2_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 3 qui vient de se connecter sur le salon
export const SAVE_PLAYER_3_INDEX = 'SAVE_PLAYER_3_INDEX';

export function Saveplayer3Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_3_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 4 qui vient de se connecter sur le salon
export const SAVE_PLAYER_4_INDEX = 'SAVE_PLAYER_4_INDEX';

export function Saveplayer4Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_4_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 5 qui vient de se connecter sur le salon
export const SAVE_PLAYER_5_INDEX = 'SAVE_PLAYER_5_INDEX';

export function Saveplayer5Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_5_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 6 qui vient de se connecter sur le salon
export const SAVE_PLAYER_6_INDEX = 'SAVE_PLAYER_6_INDEX';

export function Saveplayer6Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_6_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 7 qui vient de se connecter sur le salon
export const SAVE_PLAYER_7_INDEX = 'SAVE_PLAYER_7_INDEX';

export function Saveplayer7Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_7_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 8 qui vient de se connecter sur le salon
export const SAVE_PLAYER_8_INDEX = 'SAVE_PLAYER_8_INDEX';

export function Saveplayer8Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_8_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 9 qui vient de se connecter sur le salon
export const SAVE_PLAYER_9_INDEX = 'SAVE_PLAYER_9_INDEX';

export function Saveplayer9Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_9_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 10 qui vient de se connecter sur le salon
export const SAVE_PLAYER_10_INDEX = 'SAVE_PLAYER_10_INDEX';

export function Saveplayer10Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_10_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 11 qui vient de se connecter sur le salon
export const SAVE_PLAYER_11_INDEX = 'SAVE_PLAYER_11_INDEX';

export function Saveplayer11Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_11_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 12 qui vient de se connecter sur le salon
export const SAVE_PLAYER_12_INDEX = 'SAVE_PLAYER_12_INDEX';

export function Saveplayer12Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_12_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 13 qui vient de se connecter sur le salon
export const SAVE_PLAYER_13_INDEX = 'SAVE_PLAYER_13_INDEX';

export function Saveplayer13Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_13_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 13 qui vient de se connecter sur le salon
export const SAVE_PLAYER_14_INDEX = 'SAVE_PLAYER_14_INDEX';

export function Saveplayer14Index (i, numberRandomPlayer) { 
  return {
type : SAVE_PLAYER_14_INDEX,
i,
numberRandomPlayer
  };
}

//********************************************************* */


//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_2 = 'SAVE_BEAFORE_JOUEUR_2';

export function SavebeforeJoueur2 (beforeJoueur2) { 
  return {
type : SAVE_BEAFORE_JOUEUR_2,
beforeJoueur2
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_3 = 'SAVE_BEAFORE_JOUEUR_3';

export function SavebeforeJoueur3 (beforeJoueur3) { 
  return {
type : SAVE_BEAFORE_JOUEUR_3,
beforeJoueur3
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_4 = 'SAVE_BEAFORE_JOUEUR_4';

export function SavebeforeJoueur4 (beforeJoueur4) { 
  return {
type : SAVE_BEAFORE_JOUEUR_4,
beforeJoueur4
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_5 = 'SAVE_BEAFORE_JOUEUR_5';

export function SavebeforeJoueur5 (beforeJoueur5) { 
  return {
type : SAVE_BEAFORE_JOUEUR_5,
beforeJoueur5
  };
}


//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_6 = 'SAVE_BEAFORE_JOUEUR_6';

export function SavebeforeJoueur6 (beforeJoueur6) { 
  return {
type : SAVE_BEAFORE_JOUEUR_6,
beforeJoueur6
  };
}


//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_7 = 'SAVE_BEAFORE_JOUEUR_7';

export function SavebeforeJoueur7 (beforeJoueur7) { 
  return {
type : SAVE_BEAFORE_JOUEUR_7,
beforeJoueur7
  };
}


//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_8 = 'SAVE_BEAFORE_JOUEUR_8';

export function SavebeforeJoueur8 (beforeJoueur8) { 
  return {
type : SAVE_BEAFORE_JOUEUR_8,
beforeJoueur8
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_9 = 'SAVE_BEAFORE_JOUEUR_9';

export function SavebeforeJoueur9 (beforeJoueur9) { 
  return {
type : SAVE_BEAFORE_JOUEUR_9,
beforeJoueur9
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_10 = 'SAVE_BEAFORE_JOUEUR_10';

export function SavebeforeJoueur10 (beforeJoueur10) { 
  return {
type : SAVE_BEAFORE_JOUEUR_10,
beforeJoueur10
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_11 = 'SAVE_BEAFORE_JOUEUR_11';

export function SavebeforeJoueur11 (beforeJoueur11) { 
  return {
type : SAVE_BEAFORE_JOUEUR_11,
beforeJoueur11
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_12 = 'SAVE_BEAFORE_JOUEUR_12';

export function SavebeforeJoueur12 (beforeJoueur12) { 
  return {
type : SAVE_BEAFORE_JOUEUR_12,
beforeJoueur12
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_13 = 'SAVE_BEAFORE_JOUEUR_13';

export function SavebeforeJoueur13 (beforeJoueur13) { 
  return {
type : SAVE_BEAFORE_JOUEUR_13,
beforeJoueur13
  };
}

//On utilise l'action pour afficher les joueurs precedents  
export const SAVE_BEAFORE_JOUEUR_14 = 'SAVE_BEAFORE_JOUEUR_14';

export function SavebeforeJoueur14 (beforeJoueur14) { 
  return {
type : SAVE_BEAFORE_JOUEUR_14,
beforeJoueur14
  };
}

saveNewImgInvite
//Lorsque on n'est notifier d'un changement d'avatar, on l'enregistre dans le reducer
export const SAVE_NEW_IMG_INVITE = 'SAVE_NEW_IMG_INVITE';

export function saveNewImgInvite (changeImgPlayer) { 
  return {
type : SAVE_NEW_IMG_INVITE,
index: changeImgPlayer.index, 
imgAvatar: changeImgPlayer.imgInvite
  };
}
