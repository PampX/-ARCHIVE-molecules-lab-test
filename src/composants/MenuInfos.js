import composition from '../images/general/atoms.svg'
import conseil from '../images/general/doctor.svg'
import precaution from '../images/general/guyshocked.svg'
import detail from '../images/general/infopaper.svg'
import faq from '../images/general/chats.svg'

import '../utils/css/menuInfos.css'
import React, { useState } from 'react';

export default function MenuInfos() {

    const menu = [
        { nom: 'Composition complète', image: composition },
        { nom: 'Conseils d\'utilisation', image: conseil },
        { nom: 'Précaution', image: precaution },
        { nom: 'Liste des ingrédients', image: detail },
        { nom: 'FAQ', image: faq }
    ]
    const dataToDo = [
        "Tableau de composition",
        "Conseils d'utilisation",
        "Précaution",
        "Liste des ingrédients",
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
                        <div className='div-mi-content'>{item}</div>
                        : null
                ))}
            </div>
        </div>
    )
}