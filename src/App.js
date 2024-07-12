import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Panier from './components/Panier'
import Details from './components/Details';
import { useState, useEffect } from 'react';
import Checkout from './components/Checkout';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import Page404 from './components/Page404';

function App() {
  const savedPanier = localStorage.getItem('panier')
  const [panier, setPanier] = useState(
    savedPanier ? JSON.parse(savedPanier) : []
  )
  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier))
  }, [panier])

  return (
    <>
      <Router>
        <Header panier={panier} />
        <Routes>
          <Route path='/' element={<Accueil panier={panier} setPanier={setPanier} />}></Route>
          <Route path='/panier' element={<Panier panier={panier} setPanier={setPanier} />}></Route>
          <Route path='/details/:id' element={<Details panier={panier} setPanier={setPanier} />}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/inscription' element={<Inscription/>}></Route>
          <Route path='/connexion' element={<Connexion/>}></Route>
          <Route path='*' element={<Page404/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
