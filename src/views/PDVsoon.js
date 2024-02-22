import React, { useState, useEffect } from 'react';
import '../utils/css/pdvsoon.css'
import liposome from '../images/general/liposome-transparent.png'

export default function PDVsoon() {
    const targetDate = new Date("May 10, 2024").getTime(); 
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className='pdv-container'>
            <img className='pdv-liposome' src={liposome}/>
            <div className="pdv-bleu">
                <h2 className='pdv-title'>LA LISTE DES POINTS DE VENTE ARRIVE</h2>
            </div>
            <div className="pdv-map">
                <div className='countdown'>
                <div className='countdown-part'>
                    <h2 className='pdv-countdown-h2'>{timeLeft.days}</h2>
                    <h3 className='pdv-countdown-h3'>Jours</h3>
                </div>
                <h2 className='pdv-countdown-h2'>:</h2>
                <div className='countdown-part'>
                    <h2 className='pdv-countdown-h2'>{timeLeft.hours}</h2>
                    <h3 className='pdv-countdown-h3'>Heures</h3>
                </div>
                <h2 className='pdv-countdown-h2'>:</h2>
                <div className='countdown-part'>
                    <h2 className='pdv-countdown-h2'>{timeLeft.minutes}</h2>
                    <h3 className='pdv-countdown-h3'>Minutes</h3>
                </div>
                <h2 className='pdv-countdown-h2'>:</h2>
                <div className='countdown-part'>
                    <h2 className='pdv-countdown-h2'>{timeLeft.seconds}</h2>
                    <h3 className='pdv-countdown-h3'>Secondes</h3>
                </div>
                </div>
            </div>
        </div>
    );
}
