import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Assurez-vous d'utiliser react-ga4 si vous utilisez GA4
import Home from './views/Home';
import Produits from './views/Produits';
import PDVsoon from './views/PDVsoon';
import FicheProduit from './views/FicheProduit';
import Header from './composants/Header';
import Footer from './composants/Footer';
import { getInfosProduit } from './utils/produits/infosProduits';

// Initialisez votre ID de mesure GA4
ReactGA.initialize('G-F61DD3NBNP');

// Component pour le suivi des vues de page
function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}
export default function App() {

  const infosProduits = getInfosProduit()
  return (
    <Router>
      <RouteChangeTracker />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/points-de-vente' element={<PDVsoon />} />
        <Route path='produits' element={<Produits />} />
        <Route path="produits/articulation" element={<FicheProduit data={infosProduits['articulation']} />} />
        <Route path="produits/anti-stress" element={<FicheProduit data={infosProduits['anti-stress']} />} />
        <Route path="produits/capillaire" element={<FicheProduit data={infosProduits['capillaire']} />} />
        <Route path="produits/detox" element={<FicheProduit data={infosProduits['detox']} />} />
        <Route path="produits/energie" element={<FicheProduit data={infosProduits['energie']} />} />
        <Route path="produits/minceur" element={<FicheProduit data={infosProduits['minceur']} />} />
        <Route path="produits/jet-lag" element={<FicheProduit data={infosProduits['jet-lag']} />} />
        <Route path="produits/multivitamines-et-mineraux" element={<FicheProduit data={infosProduits['multivitamines-mineraux']} />} />
        <Route path="produits/immunite" element={<FicheProduit data={infosProduits['immunite']} />} />
        <Route path="produits/circulation" element={<FicheProduit data={infosProduits['circulation']} />} />
        <Route path="produits/voies-respiratoires" element={<FicheProduit data={infosProduits['voies-respiratoires']} />} />
        <Route path="produits/sommeil" element={<FicheProduit data={infosProduits['sommeil']} />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}



/*

{\__/}
( ●.●)
/> *Iris Alpaca Meretur Gloriam Aeternam* 

*/