import '../utils/css/listProduct.css'
import { useState, useEffect } from 'react';

import antiStress from '../images/general/molecules-anti-stress.png'
import articulation from '../images/general/molecules-articulation.png'
import capillaire from '../images/general/molecules-capillaire.png'
import detox from '../images/general/molecules-detox.png'
import energie from '../images/general/molecules-energie.png'
import minceur from '../images/general/molecules-minceur.png'
import jetLag from '../images/general/molecules-jet-lag.png'
import multivitamines from '../images/general/molecules-multivit-mineraux.png'
import immunite from '../images/general/molecules-immunite.png'
import circulation from '../images/general/molecules-circulation.png'
import voiesRespiratoires from '../images/general/molecules-voies-respiratoires.png'
import sommeil from '../images/general/molecules-sommeil.png'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ListProduct() {
    const navigate = useNavigate()
    const location = useLocation()
    const [randomProducts, setRandomProducts] = useState([]);
    const data = [
        { name: "ARTICULATION", description: "Améliore la mobilité", url: articulation, link: "/produits/articulation" },
        { name: "SOMMEIL", description: "Réduit le temps d'endormissement", url: sommeil, link: "/produits/sommeil" },
        { name: "VOIES RESPIRATOIRES", description: "Respiration facilitée", url: voiesRespiratoires, link: "/produits/voies-respiratoires" },
        { name: "ANTI-STRESS", description: "Résistance physique & mentale", url: antiStress, link: "/produits/anti-stress" },
        { name: "CAPILLAIRE", description: "Croissance & force", url: capillaire, link: "/produits/capillaire" },
        { name: "DETOX", description: "Favorise la digestion", url: detox, link: "/produits/detox" },
        { name: "ÉNERGIE", description: "Résistance à la fatigue mentale & physique", url: energie, link: "/produits/energie" },
        { name: "MINCEUR", description: "Aide à augmenter la dépense énergétique", url: minceur, link: "/produits/minceur" },
        { name: "JET LAG", description: "Décalage horaire", url: jetLag, link: "/produits/jet-lag" },
        { name: "MULTIVITAMINES", description: "Réduit la fatigue", url: multivitamines, link: "/produits/multivitamines-et-mineraux" },
        { name: "IMMUNITÉ", description: "Système immunitaire préservé", url: immunite, link: "/produits/immunite" },
        { name: "CIRCULATION", description: "Jambes légères", url: circulation, link: "/produits/circulation" }
    ];

    useEffect(() => {
        // Générer quatre index aléatoires uniques
        const randomIndexes = [];
        while (randomIndexes.length < 4) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }

        // Utiliser les index aléatoires pour sélectionner quatre produits
        const randomProductsData = randomIndexes.map(index => data[index]);
        setRandomProducts(randomProductsData);
    }, [location.pathname]);
    

    return (
        <div className='container-products-global'>
        {randomProducts.map((product, index) => (
            <div className='container-product' key={index} onClick={()=> navigate(product.link)}>
                <img className='img-product' src={product.url} alt={product.name} />
                <h2 className='title-product'>{product.name}</h2>
                <p className='text-product'>{product.description}</p>
            </div>
        ))}
    </div>
    )
}