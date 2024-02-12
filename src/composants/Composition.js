import React from 'react';
import '../utils/css/composition.css'; // Assurez-vous que le chemin d'accès est correct

export default function Composition({ ingredients, gelules }) {

    const ar = doesItGotAR(ingredients)

    return (
        <div className="composition-container">
            <table className='tableau-composition'>
                <tbody>
                    <tr>
                        <th className='bold ingredient'>Ingrédients</th>
                        <th className='bold quantite'>{"Pour " + gelules + " gélules"}</th>
                        {ar ?
                            <th className='bold ar'>AR*</th>
                            : null
                        }
                    </tr>
                    {ingredients.map((ingredient, index) => (
                        <tr className='ligne-composition' key={index}>
                            <td>{ingredient.nom}</td>
                            <td className='quantite'>{ingredient.quantite}</td>
                            {ar ?
                                <td className='ar'>{ingredient.AR ? `${ingredient.AR}%` : ''}</td>
                                : null
                            }
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            {ar ? 
            <p>*Apports de Référence</p>
            : null 
            }
        </div>
    );
};

function doesItGotAR(ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].AR) {
            return true; 
        }
    }
    return false;
}
