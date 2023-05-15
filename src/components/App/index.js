// == Import
import { Route, Routes } from "react-router-dom";

// Les pages
import Accueil from "../Acceuil";
import Meetplayer from "../Meetplayer";
import Results from "../Results";
import ScreenPlay from "../ScreenPlay";
import ToMuchPlayer from "../ScreenPlay";



// == Composant
function App() {

  //<Route path="/Ici c'est le chemin de la page " element={<Le element correspond au composant />} /
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil/> } />
        <Route path="Send-invitation/:salonState" element={<Meetplayer/> } />  
        <Route path="Playing/:salonState" element={<ScreenPlay/> } />
        <Route path="Resultat/:salonState" element={<Results/> } />
        <Route path="error" element={<ToMuchPlayer/> } />
      </Routes>
    </div>
  );
}

// == Export
export default App;
