
//Gere la value du pseudo name
export const PSEUDO_VALUE_INVITE = 'PSEUDO_VALUE_INVITE';

export function savePseudoInvite (value, field) {
  return {
type : PSEUDO_VALUE_INVITE,
value,
field,
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

export function saveAvatarImgInvit ( target ) {
  return {
    type: SAVE_AVATAR_IMG_INVIT, 
    target,
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

/************************************gestion de l'index random et d'ordre des joueurs (lorsqu'ils se connecte, les Websockets envoie les deux index) */

//save l'index et l'indexRandom d'un joueur qui vient de se connecter sur le salon
export const SAVE_PLAYER_0_INDEX = 'SAVE_PLAYER_0_INDEX';

export function Saveplayer0Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_0_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 1 qui vient de se connecter sur le salon
export const SAVE_PLAYER_1_INDEX = 'SAVE_PLAYER_1_INDEX';

export function Saveplayer1Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_1_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 2 qui vient de se connecter sur le salon
export const SAVE_PLAYER_2_INDEX = 'SAVE_PLAYER_2_INDEX';

export function Saveplayer2Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_2_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 3 qui vient de se connecter sur le salon
export const SAVE_PLAYER_3_INDEX = 'SAVE_PLAYER_3_INDEX';

export function Saveplayer3Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_3_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 4 qui vient de se connecter sur le salon
export const SAVE_PLAYER_4_INDEX = 'SAVE_PLAYER_4_INDEX';

export function Saveplayer4Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_4_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 5 qui vient de se connecter sur le salon
export const SAVE_PLAYER_5_INDEX = 'SAVE_PLAYER_5_INDEX';

export function Saveplayer5Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_5_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 6 qui vient de se connecter sur le salon
export const SAVE_PLAYER_6_INDEX = 'SAVE_PLAYER_6_INDEX';

export function Saveplayer6Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_6_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 7 qui vient de se connecter sur le salon
export const SAVE_PLAYER_7_INDEX = 'SAVE_PLAYER_7_INDEX';

export function Saveplayer7Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_7_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 8 qui vient de se connecter sur le salon
export const SAVE_PLAYER_8_INDEX = 'SAVE_PLAYER_8_INDEX';

export function Saveplayer8Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_8_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 9 qui vient de se connecter sur le salon
export const SAVE_PLAYER_9_INDEX = 'SAVE_PLAYER_9_INDEX';

export function Saveplayer9Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_9_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 10 qui vient de se connecter sur le salon
export const SAVE_PLAYER_10_INDEX = 'SAVE_PLAYER_10_INDEX';

export function Saveplayer10Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_10_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 11 qui vient de se connecter sur le salon
export const SAVE_PLAYER_11_INDEX = 'SAVE_PLAYER_11_INDEX';

export function Saveplayer11Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_11_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 12 qui vient de se connecter sur le salon
export const SAVE_PLAYER_12_INDEX = 'SAVE_PLAYER_12_INDEX';

export function Saveplayer12Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_12_INDEX,
i,
numberRandomPlayer
  };
}

//save l'index et l'indexRandom du joueur 13 qui vient de se connecter sur le salon
export const SAVE_PLAYER_13_INDEX = 'SAVE_PLAYER_13_INDEX';

export function Saveplayer13Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_13_INDEX,
i,
numberRandomPlayer
  };
}

/***************************************************************************************************** */

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_0 = 'SEND_INDEX_PLAYER_0';

export function sendIndexPlayer0 (index) { 
  return {
type : SEND_INDEX_PLAYER_0,
index,
  };
}


//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_1 = 'SEND_INDEX_PLAYER_1';

export function sendIndexPlayer1 (index) { 
  return {
type : SEND_INDEX_PLAYER_1,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_2 = 'SEND_INDEX_PLAYER_2';

export function sendIndexPlayer2 (index) { 
  return {
type : SEND_INDEX_PLAYER_2,
index,
  };
}
//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_3 = 'SEND_INDEX_PLAYER_3';

export function sendIndexPlayer3 (index) { 
  return {
type : SEND_INDEX_PLAYER_3,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_4 = 'SEND_INDEX_PLAYER_4';

export function sendIndexPlayer4 (index) { 
  return {
type : SEND_INDEX_PLAYER_4,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_5 = 'SEND_INDEX_PLAYER_5';

export function sendIndexPlayer5 (index) { 
  return {
type : SEND_INDEX_PLAYER_5,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_6 = 'SEND_INDEX_PLAYER_6';

export function sendIndexPlayer6 (index) { 
  return {
type : SEND_INDEX_PLAYER_6,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_7 = 'SEND_INDEX_PLAYER_7';

export function sendIndexPlayer7 (index) { 
  return {
type : SEND_INDEX_PLAYER_7,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_8 = 'SEND_INDEX_PLAYER_8';

export function sendIndexPlayer8 (index) { 
  return {
type : SEND_INDEX_PLAYER_8,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_9 = 'SEND_INDEX_PLAYER_9';

export function sendIndexPlayer9 (index) { 
  return {
type : SEND_INDEX_PLAYER_9,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_10 = 'SEND_INDEX_PLAYER_10';

export function sendIndexPlayer10 (index) { 
  return {
type : SEND_INDEX_PLAYER_10,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_11 = 'SEND_INDEX_PLAYER_11';

export function sendIndexPlayer11 (index) { 
  return {
type : SEND_INDEX_PLAYER_11,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_12 = 'SEND_INDEX_PLAYER_12';

export function sendIndexPlayer12 (index) { 
  return {
type : SEND_INDEX_PLAYER_12,
index,
  };
}

//On envoie via les websockets les indexs aux autres joueurs
export const SEND_INDEX_PLAYER_13 = 'SEND_INDEX_PLAYER_13';

export function sendIndexPlayer13 (index) { 
  return {
type : SEND_INDEX_PLAYER_13,
index,
  };
}
