import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop";  // Ajustez le chemin d'accès en conséquence
import Layout from "./Layout";
import FormationPage from "./page/Formation/Formation.jsx";
import Home from "./Home2";
import CommentSinscrire from "page/CommentSinscrire/CommentSinscrire";




const App = () => {
  return (

    <BrowserRouter>
       <ScrollToTop />     
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:formationLink" element={<FormationPage />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/comment-s-inscrire-en-formation" element={<CommentSinscrire />} /> 
          </Route>
      </Routes>
    </BrowserRouter>

 
  );
};

export default App;