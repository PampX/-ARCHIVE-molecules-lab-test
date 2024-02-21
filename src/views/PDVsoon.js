import React, { useState, useEffect } from 'react';
import '../utils/css/pdvsoon.css'

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
            <div className="pdv-bleu">
                <h2 className='pdv-title'>LA LISTE DES POINTS DE VENTE ARRIVE</h2>
            </div>
            <div className="pdv-map">
                <h2 className='pdv-countdown'>{`${timeLeft.days} jours, ${timeLeft.hours} heures, ${timeLeft.minutes} minutes, ${timeLeft.seconds} secondes`}</h2>
            </div>
        </div>
    );
}
