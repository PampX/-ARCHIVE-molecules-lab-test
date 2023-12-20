import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Homepage from './views/Homepage';
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import Produits from './views/Produits';
import Articulation from './views/Articulation';
import AntiStress from './views/AntiStress';
import Capillaire from './views/Capillaire';
import Detox from './views/Detox';
import Energie from './views/Energie';
import JetLag from './views/JetLag';
import MultivitaminesEtMineraux from './views/MultivitaminesEtMineraux';
import Immunite from './views/Immunite';
import Circulation from './views/Circulation';
import VoiesRespiratoires from './views/VoiesRespiratoires';
import Sommeil from './views/Sommeil';

import TransitionPage from './components/global/TransitionPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true); // Réinitialise l'état de chargement à true lors d'un changement de route

    // Simulez une durée de chargement avec setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [location.pathname]); // Utilise location.pathname  pour détecter les changements de route

  if (isLoading) {
    return <TransitionPage />;
  }

  return (
    <div>
      <Header />
      <Routes>
        {/* Vos routes existantes ici */}
        <Route path="/" element={<Homepage pageName="Accueil" />} />
        <Route path="produits" element={<Produits pageName="Nos Produits" />} />
        <Route path="produits/articulation" element={<Articulation pageName="Articulation" />} />
        <Route path="produits/anti-stress" element={<AntiStress pageName="Anti-Stress" />} />
        <Route path="produits/capillaire" element={<Capillaire pageName="Capillaire" />} />
        <Route path="produits/detox" element={<Detox pageName="Détox" />} />
        <Route path="produits/energie" element={<Energie pageName="Énergie" />} />
        <Route path="produits/minceur" element={<JetLag pageName="Jet Lag" />} />
        <Route path="produits/jet-lag" element={<JetLag pageName="Jet Lag" />} />
        <Route path="produits/multivitamines-et-mineraux" element={<MultivitaminesEtMineraux pageName="Multivitamines & Minéraux" />} />
        <Route path="produits/immunite" element={<Immunite pageName="Immunité" />} />
        <Route path="produits/circulation" element={<Circulation pageName="Circulation" />} />
        <Route path="produits/voies-respiratoires" element={<VoiesRespiratoires pageName="Voies Respiratoires" />} />
        <Route path="produits/sommeil" element={<Sommeil pageName="sommeil" />} />
      </Routes>
      <Footer />
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
