import arrow from '../images/general/arrow.png'
import '../utils/css/listeIngredient.css'
import React, { useState } from 'react';

export default function ListeIngredients({ ingredients, num }) {

    const [actif, setActif] = useState(-1);
    const [ingreOuBF, setIngreOuBF] = useState(true)

    const handle = (index) => {
        if (actif === index) {
            setActif(-1);
            return;
        }
        setIngreOuBF(true)
        setActif(index);
    }

    const handleIngreBF = (what) => {
        setIngreOuBF(what)
    }

    return (
        <div className='div-ingredient-container'>
            {ingredients.map((ingredient, index) => (
                <div>
                    <div className='div-ingredient-actif' key={index}>
                        <div className='div-nomIngre' onClick={() => handle(index)} >
                            <div style={{ display: 'flex' }}>
                                <h2 className='h2-ingredient-nomactif'>{ingredient}</h2>
                                <sup className='sup-ingredient-actif'>{num[index] !== 0 ? num[index] : null}</sup>
                            </div>
                            <img src={arrow} className={'img-ingredient-arrow ' + (actif === index ? 'rotated' : '')} alt='fleche' />
                        </div>
                        {actif === index &&
                            <div className='div-2boutons-ingre'>
                                <p className={'p-ingredient-bouton ' + (ingreOuBF ? 'actif-ingredient' : '')} onClick={() => handleIngreBF(true)}>L'ingrédient</p>
                                <p className={'p-ingredient-bouton ' + (!ingreOuBF ? 'actif-ingredient' : '')} onClick={() => handleIngreBF(false)}>Ses bienfaits</p>
                            </div>
                        }
                    </div>
                    {actif === index && (ingreOuBF ? (
                        <p className='p-ingredient-explication'>
                            L'Ashwagandha1, connue scientifiquement sous le nom de Withania somnifera, est une plante adaptogène puissante originaire d'Inde.
                            Utilisée depuis des millénaires en médecine ayurvédique, elle est réputée pour ses nombreux bienfaits sur la santé physique et mentale.
                            Elle aide le corps à gérer le stress efficacement. Elle agit en modulant les réponses du système nerveux, contribuant ainsi à réduire
                            l'anxiété et à améliorer la résistance au stress. Elle aide à améliorer la concentration, réduit les symptômes de dépression et d'anxiété,
                            et favorise un meilleur sommeil, contribuant ainsi à une meilleure qualité de vie.
                        </p>
                    ) :
                        <p className='p-ingredient-explication'>
                            Antioxydant
                            Aide à protéger les tissus des blessures.
                            Aide à un effet rajeunissant général et à protéger la santé générale.
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}