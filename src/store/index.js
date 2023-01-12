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

/*
store.subscribe(() => {
  let state = store.getState();
  // Faire quelque chose avec l'état du store
  console.log('le subscribe', state);
});
*/


export default store;
