import React from 'react';
import '../utils/css/notificationBar.css';

const NotificationBar = ({ onClick, style, hasNotification, hisOpen, onClose }) => {
    return (
        <div className={`notification-bar ${!hisOpen ? 'mobile-version' : ''}`} onClick={onClick} style={style}>
            <p className='title-notification'>Guillaume, assistant IA</p>
            {!hisOpen && (
                <svg className="svg-header" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve">
                    <style>
                        {`.st0 { fill: ${hasNotification ? 'red' : 'rgb(193, 193, 193)'}; stroke:${hasNotification ? 'red' : 'rgb(193, 193, 193)'}; stroke-miterlimit: 10; }`}
                    </style>
                    <path fill="#2F7F6E" d="M4,19v-2h2v-7c0-1.4,0.4-2.6,1.2-3.7s1.9-1.8,3.2-2.1V3.5c0-0.4,0.1-0.8,0.4-1.1C11.2,2.1,11.6,2,12,2
                c0.4,0,0.8,0.1,1.1,0.4c0.3,0.3,0.4,0.6,0.4,1.1v0.7c1.3,0.3,2.4,1,3.2,2.1C17.6,7.4,18,8.6,18,10v7h2v2H4z M12,22
                c-0.6,0-1-0.2-1.4-0.6S10,20.5,10,20h4c0,0.5-0.2,1-0.6,1.4S12.6,22,12,22z M8,17h8v-7c0-1.1-0.4-2-1.2-2.8S13.1,6,12,6
                s-2,0.4-2.8,1.2S8,8.9,8,10V17z" />
                    <circle className="st0" cx="17" cy="7.8" r="3" />
                </svg>
            )}
            {hisOpen && (
                <div onClick={(e) => { e.stopPropagation(); onClose(); }}>
                    <svg className='svg-reduc-page' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="14" width="14" height="2" fill="white" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default NotificationBar;
