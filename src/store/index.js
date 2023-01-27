import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

// On donne acces au middlewares 
import socketMiddleware from '../middlewares/webSocketConnection';


// ici on va venir importer les middleswares que l'on va creer

//permet d'utiliser les react devs tool dans le localhost
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// trad. exhausteurs => permet d'englober le applyMiddleware qui lui meme engloble tout les middlewares
const enhancers = composeEnhancers(
  // applyMiddleware permet de "combiner" les deux middlewares (les mettre dans un paquet)
  applyMiddleware( socketMiddleware ),
);

const store = createStore(reducer, enhancers);


// Ici on va venir observé le state et des qu'il change, on dipatch les actions

 
/*
store.subscribe(() => {
  let state = store.getState();


  console.log('le subscribe', state.avatar);
});
*/



export default store;
