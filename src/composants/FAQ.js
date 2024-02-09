import React, { useState } from 'react';
import arrow from '../images/general/arrow.png'

import '../utils/css/faq.css';

export default function FAQ({ faq }){
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faq.map((item, index) => (
                <div key={index} className={`faq-item ${openQuestionIndex === index ? 'open' : ''}`}>
                    <div
                        className="faq-question"
                        onClick={() => toggleQuestion(index)}
                    >
                        {item.question}
                        <img src={arrow} className={'img-ingredient-arrow ' + (openQuestionIndex === index ? 'rotated' : '')} alt='fleche' />
                    </div>
                    {openQuestionIndex === index && (
                        <div className="faq-answer">{item.reponse}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

