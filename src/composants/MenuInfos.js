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

export default function MenuInfos({data, isPhone}) {

    const menu = [
        { nom: 'Composition complète', image: composition },
        { nom: 'Conseils d\'utilisation', image: conseil },
        { nom: 'Précautions d\'emploi', image: precaution },
        { nom: 'Liste des ingrédients', image: detail },
        { nom: 'FAQ', image: faq }
    ]
    const dataToDo = [
        "Composition",
        "Conseils",
        "Precaution",
        "Ingrédients",
        "FAQ"
    ]
    const [active, setActive] = useState(0)
    const handleChange = (index) => {
        setActive(index)
    }
    const renderContent = (item, index,isPhone) => {
        return (
            active === index ?
                <div key={index} className={isPhone ? 'div-mi-content-phone' : 'div-mi-content'}>
                    {     item === "FAQ" ? <FAQ faq={data.faq} />
                        : item === 'Precaution' ? <Precaution precautions={data.precaution} />
                        : item === 'Composition' ? <Composition ingredients={data.composition} gelules={data.compositionGelule} />
                        : item === 'Conseils' ? <Conseil conseils={data.conseilUtilisation} />
                        : item === 'Ingrédients' ? 
                            <div>
                                <p className='p-mi-ingre'>Ingrédients </p>
                                {data.listeIngredient.map((ingre,index1)=>(
                                    <p key={index1}>{ingre}</p>
                                ))}
                            </div>
                        : null
                    }
                </div>
                : null
        );
    };

    return (
        <div>
            {isPhone ? (
                menu.map((item, index) => (
                    <div className='div-mi-containt-phone' key={index}>
                        <div className={'div-mi-menu ' + (active === index ? 'div-actif' : '')} onClick={() => handleChange(index)}>
                            <img src={item.image} className='img-mi-iconMenu' alt={item.nom} />
                            <p className={'p-mi-menu ' + (active === index ? 'p-actif' : '')}>{item.nom}</p>
                        </div>
                        {renderContent(dataToDo[index], index,isPhone)}
                    </div>
                ))
            ) : (
                <div className='div-mi-containt'>
                    <div >
                        {menu.map((item, index) => (
                            <div key={index} className={'div-mi-menu ' + (active === index ? 'div-actif' : '')} onClick={() => handleChange(index)}>
                                <img src={item.image} className='img-mi-iconMenu' alt={item.nom} />
                                <p className={'p-mi-menu ' + (active === index ? 'p-actif' : '')}>{item.nom}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {dataToDo.map((item, index) => renderContent(item, index,isPhone))}
                    </div>
                </div>
            )}
        </div>
    )
}