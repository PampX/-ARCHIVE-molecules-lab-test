import arrow from '../images/general/arrow.png'
import '../utils/css/listeIngredient.css'
import React, { useState } from 'react';

export default function ListeIngredients({ ingredients, num, description }) {
    console.log(description);
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
                        {actif === index && description[index]['description'] && description[index]['bienfait'] &&
                            <div className='div-2boutons-ingre'>
                                <p className={'p-ingredient-bouton ' + (ingreOuBF ? 'actif-ingredient' : '')} onClick={() => handleIngreBF(true)}>L'ingrédient</p>
                                <p className={'p-ingredient-bouton ' + (!ingreOuBF ? 'actif-ingredient' : '')} onClick={() => handleIngreBF(false)}>Ses bienfaits</p>
                            </div>
                        }
                    </div>
                    {actif === index && (ingreOuBF ? (
                        <p className='p-ingredient-explication'>
                            {description[index]['description']}
                        </p>
                    ) :
                        <p className='p-ingredient-explication'>
                            {description[index]['bienfait'].map((bienfait,index2)=>(
                                <div>
                                    <p className='bienfait-titre'>{bienfait.titre}</p>
                                    {bienfait.description.map((bfDescription,index3)=>(
                                        <p className='bienfait-description'>
                                            {"• "+bfDescription}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </p>
                    )}
                </div>
            ))}
        </div>
    )
}