import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Produits from './views/Produits';
import FicheProduit from './views/FicheProduit';
import Header from './composants/Header';
import Footer from './composants/Footer';

// import des produits
import {getInfosProduit} from './utils/produits/infosProduits'; 

export default function App() {

  const infosProduits = getInfosProduit()
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='produits' element={<Produits/>}/>
        <Route path="produits/articulation" element={<FicheProduit data={infosProduits['articulation']} />} />
        <Route path="produits/anti-stress" element={<FicheProduit data={infosProduits['anti-stress']} />} />
        <Route path="produits/capillaire" element={<FicheProduit data={infosProduits['capillaire']} />} />
        <Route path="produits/detox" element={<FicheProduit data={infosProduits['detox']} />} />
        <Route path="produits/energie" element={<FicheProduit data={infosProduits['energie']} />} />
        <Route path="produits/minceur" element={<FicheProduit data={infosProduits['minceur']} />} />
        <Route path="produits/jet-lag" element={<FicheProduit data={infosProduits['jet-lag']} />} />
        <Route path="produits/multivitamines-et-mineraux" element={<FicheProduit data={infosProduits['multivitamines']} />} />
        <Route path="produits/immunite" element={<FicheProduit data={infosProduits['immunite']} />} />
        <Route path="produits/circulation" element={<FicheProduit data={infosProduits['circulation']} />} />
        <Route path="produits/voies-respiratoires" element={<FicheProduit data={infosProduits['voies-respiratoires']} />} />
        <Route path="produits/sommeil" element={<FicheProduit data={infosProduits['sommeil']} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}



/*

{\__/}
( ●.●)
/> *Iris Alpaca Meretur Gloriam Aeternam* 

*/