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
    { name: "articulation", key: "articulation", desc: "Améliore la mobilité" },
    { name: "sommeil", key: "sommeil", desc: "Réduit le temps d'endormissement" },
    { name: "voies respiratoires", key: "respiratoires", desc: "Respiration facilitée" },
    { name: "anti-stress", key: "stress", desc: "Résistance physique & mentale" },
    { name: "multivitamines", key: "multi", desc: "Réduit la fatigue" },
    { name: "circulation", key: "circulation", desc: "Jambe légère" },
    { name: "détox", key: "detox", desc: "Favorise la digestion" },
    { name: "capillaire", key: "capillaire", desc: "Croissance & force" },
    { name: "jet lag", key: "jetLag", desc: "Décalage horaire" },
    { name: "minceur", key: "minceur", desc: "Aide à augmenter la dépense énergétique" },
    { name: "énergie", key: "energie", desc: "Résistance à la fatigue mentale & physique" },
    { name: "immunité", key: "immunite", desc: "Système immunitaire préservé" },
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
