import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        const endDate = new Date('2025-04-01T00:00:00');
        const now = new Date();
        const difference = endDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div className="timer-container">
            <div className="timer-box">
                <div className="timer-unit">
                    <span className="timer-value">{timeLeft.days}</span>
                    <span className="timer-label">Days</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{timeLeft.hours}</span>
                    <span className="timer-label">Hours</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{timeLeft.minutes}</span>
                    <span className="timer-label">Minutes</span>
                </div>
                <div className="timer-unit">
                    <span className="timer-value">{timeLeft.seconds}</span>
                    <span className="timer-label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;
