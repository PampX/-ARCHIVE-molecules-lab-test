import React, { useState, useEffect} from 'react';
import '../../utils/css/transitionPage.css';
import logo from '../../assets/images/logoLIN.svg'

const TransitionPage = () => {
  const [rotation, setRotation] = useState(0); // État pour le degré de rotation

  useEffect(() => {
    // Fonction pour inverser la rotation
    const rotateLeft = () => {
      setRotation(rotation - 3);
    };

    // Fonction pour effectuer la rotation
    const rotateRight = () => {
      setRotation(rotation + 3);
    };

    // Démarrez la rotation vers la droite
    const rotationInterval = setInterval(rotateRight, 100); // 100ms pour une rotation plus fluide

    // Inverser la rotation toutes les 2 secondes
    setTimeout(() => {
      clearInterval(rotationInterval); // Arrêtez la rotation vers la droite
      setInterval(rotateLeft, 200); // Commencez la rotation vers la gauche
    }, 200);

    return () => {
      clearInterval(rotationInterval); // Nettoyez l'intervalle lorsqu'il n'est plus nécessaire
    };
  }, [rotation]);

  const svgStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.1s linear', // Adoucit la transition entre les rotations
  };

  return (
    <div className="transition-page">
      <p>chrgement</p>
    </div>
  );
}

export default TransitionPage;
