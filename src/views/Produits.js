import React, { useState, useEffect } from 'react';
import '../utils/css/produits.css';

const images = {
    articulation: require('../images/home/molecules-articulation.png'),
    sommeil: require('../images/home/molecules-sommeil.png'),
    respiratoires: require('../images/home/molecules-voies-respiratoires.png'),
    stress: require('../images/home/molecules-anti-stress.png'),
    multi: require('../images/home/molecules-multivit-mineraux.png'),
    circulation: require('../images/home/molecules-circulation.png'),
    detox: require('../images/home/molecules-detoxl.png'),
    capillaire: require('../images/home/molecules-capillaire.png'),
    jetLag: require('../images/home/molecules-jet-lag.png'),
    minceur: require('../images/home/molecules-minceur.png'),
    energie: require('../images/home/molecules-energie.png'),
    immunite: require('../images/home/molecules-immunite.png'),
};

const productInfo = [
    { name: "articulation", key: "articulation", desc: "Améliore la mobilité", link: "/produits/articulation" },
    { name: "sommeil", key: "sommeil", desc: "Réduit le temps d'endormissement" , link: "/produits/sommeil" },
    { name: "voies respiratoires", key: "respiratoires", desc: "Respiration facilitée" , link: "/produits/voies-respiratoires" },
    { name: "anti-stress", key: "stress", desc: "Résistance physique & mentale" , link: "/produits/anti-stress" },
    { name: "multivitamines", key: "multi", desc: "Réduit la fatigue", link: "/produits/multivitamines-et-mineraux" },
    { name: "circulation", key: "circulation", desc: "Jambe légère", link: "/produits/circulation" },
    { name: "détox", key: "detox", desc: "Favorise la digestion", link: "/produits/detox" },
    { name: "capillaire", key: "capillaire", desc: "Croissance & force", link: "/produits/capillaire" },
    { name: "jet lag", key: "jetLag", desc: "Décalage horaire", link: "/produits/jet-lag" },
    { name: "minceur", key: "minceur", desc: "Aide à augmenter la dépense énergétique", link: "/produits/minceur" },
    { name: "énergie", key: "energie", desc: "Résistance à la fatigue mentale & physique", link: "/produits/energie" },
    { name: "immunité", key: "immunite", desc: "Système immunitaire préservé", link: "/produits/immunite" },
];

export default function Produits() {
    const [activeProductIndex, setActiveProductIndex] = useState(null);

    const handleClick = (index) => {
        setActiveProductIndex(index === activeProductIndex ? null : index);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container-all'>
            <div className='container-product-all'>
                {productInfo.map((product, index) => (
                    <div 
                        className={`container-one-product ${activeProductIndex === index ? "show-extra-text" : ""}`} 
                        onClick={() => handleClick(index)}
                        key={index}
                    >
                        <img className='img-product-pres' src={images[product.key]} alt={product.name} />
                        <p className='text-product-product'>{product.name}</p>
                        <p className='extra-text'>{product.desc}</p>
                        <div className='underline'></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
