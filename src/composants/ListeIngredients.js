import arrow from '../images/general/arrow.png'
import '../utils/css/listeIngredient.css'
import React, { useState } from 'react';

export default function ListeIngredients({ ingredients, num, description, isPhone }) {
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
                <div key={index}>
                    <div className={(isPhone ? ' phone-div-ingredient-actif' : 'div-ingredient-actif')} key={index}>
                        <div className='div-nomIngre' onClick={() => handle(index)} >
                            <div style={{ display: 'flex' }}>
                                <h2 className='h2-ingredient-nomactif'>{ingredient}</h2>
                                <sup className='sup-ingredient-actif'>{num[index] !== 0 ? num[index] : null}</sup>
                            </div>
                            <img src={arrow} className={'img-ingredient-arrow ' + (actif === index ? 'rotated' : '')} alt='fleche' />
                        </div>
                        {actif === index && description[index]['description'] && description[index]['bienfait'] &&
                            <div className='div-2boutons-ingre'>
                                <p className={'p-ingredient-bouton ' + (ingreOuBF ? 'actif-ingredient' : '')} onClick={() => handleIngreBF(true)}>L'ingrédient</p>
                                <p className={'p-ingredient-bouton ' + (!ingreOuBF ? 'actif-ingredient' : '')} onClick={() => handleIngreBF(false)}>Ses bienfaits</p>
                            </div>
                        }
                    </div>
                    {actif === index && (
                        description[index]['description'] && description[index]['bienfait'] ? (
                            // Si l'ingrédient a une description ET des bienfaits
                            ingreOuBF ? (
                                <p className={(isPhone ? ' p-ingredient-explication-phone' : 'p-ingredient-explication')}>
                                    {description[index]['description'].map((desc,index6)=>(
                                        <p className={(isPhone ? ' p-ingredient-explication-phone' : 'p-ingredient-explication')}>{desc}</p>
                                    ))}
                                </p>
                            ) : (
                                <p className={(isPhone ? ' p-ingredient-explication-phone' : 'p-ingredient-explication')}>
                                    {description[index]['bienfait'].map((bienfait, index2) => (
                                        <div key={index2}>
                                            <p className='bienfait-titre'>{bienfait.titre}</p>
                                            {bienfait.description.map((bfDescription, index3) => (
                                                <p key={index3} className='bienfait-description'>{"• " + bfDescription}</p>
                                            ))}
                                        </div>
                                    ))}
                                </p>
                            )
                        ) : (
                            // Si l'ingrédient a seulement une description ou des bienfaits
                            description[index]['description'] ? (
                                <p className={(isPhone ? ' p-ingredient-explication-phone' : 'p-ingredient-explication')}>{description[index]['description']}</p>
                            ) : (
                                <p className={(isPhone ? ' p-ingredient-explication-phone' : 'p-ingredient-explication')}>
                                    {description[index]['bienfait'].map((bienfait, index2) => (
                                        <div key={index2}>
                                            <p className='bienfait-titre'>{bienfait.titre}</p>
                                            {bienfait.description.map((bfDescription, index3) => (
                                                <p key={index3} className='bienfait-description'>{"• " + bfDescription}</p>
                                            ))}
                                        </div>
                                    ))}
                                </p>
                            )
                        )
                    )}
                </div>
            ))}
        </div>
    )
}