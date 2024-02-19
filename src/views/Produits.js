import React, { useState, useEffect } from 'react';
import '../utils/css/produits.css';
import closePopUp from '../images/home/close-popUp.png';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import NotificationBar from '../composants/NotificationBar'
import ChatBot from '../composants/ChatBot'

const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

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

    { name: "articulation", key: "articulation", desc: "Améliore la mobilité", desc2: "Confort articulaire · Flexibilité", path: "/articulation" },
    { name: "sommeil", key: "sommeil", desc: "Réduit le temps d'endormissement", desc2: "Sommeil réparateur · Relaxation · Endormissement", path: "/sommeil" },
    { name: "voies respiratoires", key: "respiratoires", desc: "Respiration facilitée", desc2: "Système immunitaire & respiratoire · Vitalité", path: "/voies-respiratoires" },
    { name: "anti-stress", key: "stress", desc: "Résistance physique & mentale", desc2: "Sérénité · Détente · Energie · Performance", path: "/anti-stress" },
    { name: "multivitamines", key: "multi", desc: "Réduit la fatigue", desc2: "Système immunitaire · Equilibre hormonal & nerveux · Performance", path: "/multivitamines-et-mineraux" },
    { name: "circulation", key: "circulation", desc: "Jambes légères", desc2: "Circulation veineuse · Lymphatique · Antioxydant · Vasoprotecteur", path: "/circulation" },
    { name: "détox", key: "detox", desc: "Favorise la digestion", desc2: "Détox du foie · Digestion · Purification", path: "/detox" },
    { name: "capillaire", key: "capillaire", desc: "Croissance & force", desc2: "Beauté & croissance des cheveux · Anti-chute · Pigmentation", path: "/capillaire" },
    { name: "jet lag", key: "jetLag", desc: "Décalage horaire", desc2: "Décalage horaire · Rapidité endormissement · Régulation du cycle circadien", path: "jet-lag" },
    { name: "minceur", key: "minceur", desc: "Aide à augmenter la dépense énergétique", desc2: "Brûle-graisses · Perte de poids · Digestion", path: "/minceur" },
    { name: "énergie", key: "energie", desc: "Résistance à la fatigue mentale & physique", desc2: "Dynamisant · Equilibre énergétique · Système nerveux", path: "/energie" },
    { name: "immunité", key: "immunite", desc: "Système immunitaire préservé", desc2: "Système immunitaire · Protection stress oxydatif · Métabolisme · Vitalité", path: "/immunite" },
];

export default function Produits() {
    const [activeProductIndex, setActiveProductIndex] = useState(null);
    const [openProduct, setOpenProduct] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [showChat, setShowChat] = useState(false);
    const [hasNotification, setHasNotification] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [notificationBarStyle, setNotificationBarStyle] = useState({});

  useEffect(() => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight,})
    if (windowSize.height < 700) {
      setNotificationBarStyle({
        bottom: showChat ? '560px' : '20px',
        cursor: showChat ? 'default' : 'pointer',
      });
    } else {
      setNotificationBarStyle({
        bottom: showChat ? '722px' : '20px',
        cursor: showChat ? 'default' : 'pointer',
      });
    }
  }, [windowSize.height, showChat]);


    const handleNotificationClick = () => {
        setShowChat(true);
    };

    const handleCloseChat = () => {
        setShowChat(false);
        setHasNotification(false)
    };

    const handleNewMessage = () => {
        setHasNotification(true);
    };

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const numberOfProductsPerRow = windowWidth < 1006 ? 2 : 4;

    const handleClick = (index, product) => {
        setActiveProductIndex(index === activeProductIndex ? null : index);
        if (openProduct === null) {
            setOpenProduct([product.name, product.key, product.desc2, product.path]);
        } else if (openProduct[0] === product.name) {
            setOpenProduct(null);
        } else {
            setOpenProduct([product.name, product.key, product.desc2, product.path]);
        }
    };

    const ClickClosed = () => {
        setOpenProduct(null);
    };

    return (
        <div className='container-all'>
            <div className='container-product-all'>
                {productInfo.map((product, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`container-one-product ${activeProductIndex === index ? "show-extra-text" : ""}`}
                            onClick={() => handleClick(index, product)}
                        >
                            <img className='img-product-pres' src={images[product.key]} alt={product.name} />
                            <p className='text-product-product'>{product.name}</p>
                            {activeProductIndex === index && (
                                <FadeIn>
                                    <p className='extra-text'>{product.desc}</p>
                                    <div className='underline'></div>
                                </FadeIn>
                            )}
                        </div>
                        {((index + 1) % numberOfProductsPerRow === 0 || index === productInfo.length - 1) && openProduct && Math.floor(activeProductIndex / numberOfProductsPerRow) === Math.floor(index / numberOfProductsPerRow) && (
                            <FadeIn className='container-popUp-product'>
                                <img onClick={ClickClosed} src={closePopUp} className='img-popUp' alt="Close" />
                                <div className='container-content-popUp'>
                                    <img src={images[openProduct[1]]} className='img-product-popUp' alt={openProduct[0]} />

                                    <div className='container-text-popUp'>
                                        <h1 className='title-popUp'>{openProduct[0]}</h1>
                                        <p className='text-popUp'>{openProduct[2]}</p>
                                        <Link to={"/produits"+openProduct[3]} className='button-popUp-produit'>En savoir plus</Link>
                                    </div>
                                </div>
                            </FadeIn>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="app">
                <div>
                    <NotificationBar hisOpen={showChat} hasNotification={hasNotification} onClose={handleCloseChat} onClick={handleNotificationClick} style={notificationBarStyle} />
                    {showChat && <ChatBot hisOpen={showChat} onNewMessage={handleNewMessage} />}
                </div>
            </div>
        </div>
    );
}
