import React, { useState, useEffect } from 'react';
import '../utils/css/produits.css';
import closePopUp from '../images/home/close-popUp.png'

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
    { name: "articulation", key: "articulation", desc: "Améliore la mobilité", desc2: "forces, beauté, clément" },
    { name: "sommeil", key: "sommeil", desc: "Réduit le temps d'endormissement", desc2: "forces, beauté, clément" },
    { name: "voies respiratoires", key: "respiratoires", desc: "Respiration facilitée", desc2: "forces, beauté, clément" },
    { name: "anti-stress", key: "stress", desc: "Résistance physique & mentale", desc2: "forces, beauté, clément" },
    { name: "multivitamines", key: "multi", desc: "Réduit la fatigue", desc2: "forces, beauté, clément" },
    { name: "circulation", key: "circulation", desc: "Jambe légère", desc2: "forces, beauté, clément" },
    { name: "détox", key: "detox", desc: "Favorise la digestion", desc2: "forces, beauté, clément" },
    { name: "capillaire", key: "capillaire", desc: "Croissance & force", desc2: "forces, beauté, clément" },
    { name: "jet lag", key: "jetLag", desc: "Décalage horaire", desc2: "forces, beauté, clément" },
    { name: "minceur", key: "minceur", desc: "Aide à augmenter la dépense énergétique", desc2: "forces, beauté, clément" },
    { name: "énergie", key: "energie", desc: "Résistance à la fatigue mentale & physique", desc2: "forces, beauté, clément" },
    { name: "immunité", key: "immunite", desc: "Système immunitaire préservé", desc2: "forces, beauté, clément" },
];

export default function Produits() {
    const [activeProductIndex, setActiveProductIndex] = useState(null);
    const [openProduct, setOpenProduct] = useState(null);

    const handleClick = (index, product) => {
        setActiveProductIndex(index === activeProductIndex ? null : index);
        if(openProduct === null){
            setOpenProduct([product.name, product.key, product.desc2])
        }else if (openProduct[0] === product.name){
            setOpenProduct(null)
        }else{
            setOpenProduct([product.name, product.key, product.desc2])
        }
    };

    const ClickClosed = () => {
        setOpenProduct(null)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='container-all'>
            <div className='container-product-all'>
                {productInfo.map((product, index) => (
                    <div 
                        className={`container-one-product ${activeProductIndex === index ? "show-extra-text" : ""}`} 
                        onClick={() => handleClick(index, product)}
                        key={index}
                    >
                        <img className='img-product-pres' src={images[product.key]} alt={product.name} />
                        <p className='text-product-product'>{product.name}</p>
                        <p className='extra-text'>{product.desc}</p>
                        <div className='underline'></div>
                    </div>
                ))}
                {openProduct && (
                    <div className='container-popUp-product'>
                        <img onClick={() => ClickClosed()} src={closePopUp} className='img-popUp'/>
                        <div className='container-content-popUp'>
                            <img src={images[openProduct[1]]} className='img-product-popUp'/>
                            <div className='container-text-popUp'>
                                <h1 className='title-popUp'>{openProduct[0]}</h1>
                                <p className='text-popUp'>{openProduct[2]}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
