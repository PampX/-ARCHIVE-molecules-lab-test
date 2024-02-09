import composition from '../images/general/atoms.svg'
import conseil from '../images/general/doctor.svg'
import precaution from '../images/general/guyshocked.svg'
import detail from '../images/general/infopaper.svg'
import faq from '../images/general/chats.svg'

import FAQ from '../composants/FAQ.js'
import Precaution from '../composants/Precaution.js'
import Composition from '../composants/Composition.js'
import Conseil from '../composants/Conseil.js'
import '../utils/css/menuInfos.css'
import React, { useState } from 'react';

export default function MenuInfos({data}) {

    const menu = [
        { nom: 'Composition complète', image: composition },
        { nom: 'Conseils d\'utilisation', image: conseil },
        { nom: 'Précaution', image: precaution },
        { nom: 'Liste des ingrédients', image: detail },
        { nom: 'FAQ', image: faq }
    ]
    const dataToDo = [
        "Composition",
        "Conseils",
        "Precaution",
        data.listeIngredient,
        "FAQ"
    ]
    const [active, setActive] = useState(0)
    const handleChange = (index) => {
        setActive(index)
    }
    return (
        <div className='div-mi-containt'>
            <div>
                {menu.map((item, index) => (
                    <div className={'div-mi-menu ' + (active === index ? 'div-actif' : '')} onClick={() => handleChange(index)}>
                        <img src={item.image} className='img-mi-iconMenu' alt={item.nom} />
                        <p className={'p-mi-menu ' + (active === index ? 'p-actif' : '')}>{item.nom}</p>
                    </div>
                ))}
            </div>
            <div>
                {dataToDo.map((item, index) => (
                    active === index ?
                        <div className='div-mi-content'>
                            {item === "FAQ" ? <FAQ faq={data.faq} />
                                : item === 'Precaution' ? <Precaution precautions={data.precaution} />
                                : item === 'Composition' ? <Composition ingredients={data.composition} gelules={data.compositionGelule} />
                                : item === 'Conseils' ? <Conseil conseils={data.conseilUtilisation} />
                                : item
                            }
                        </div>
                        : null
                ))}
            </div>
        </div>
    )
}