import { TopCard } from '../../components/top-card';
import './styles.scss';
import { monthlyData } from '../../data/data';
import { weeklyData } from '../../data/data';
import { useEffect, useState } from 'react';
import { MiniProfile } from '../../components/mini-profile';
import { DashboardHeader } from '../../components/dashboard-header';

interface CardDataProps {
    title: string;
    value: string;
    percent: string;
    backgroundColor: string;
}

export const Dashboard = ():JSX.Element => {
    const [cardData, setCardData] = useState<CardDataProps[]>();

    useEffect(() => {
        setCardData(monthlyData);

        // make login form and delete this
        window.localStorage.setItem('firstName', 'Anthony');
        window.localStorage.setItem('fullName', 'Anthony Folino');
    }, [])

    return (
        <div className='container'>
            
            <DashboardHeader />

            <button className="change-card-data" onClick={() => cardData === weeklyData ? setCardData(monthlyData) : setCardData(weeklyData) }>{cardData === weeklyData ? 'VIEW MONTHLY STATS' : 'VIEW WEEKLY STATS'}</button>
            <div className="top-cards">
                {cardData?.map(card => (
                    <TopCard title={card.title} value={card.value} percent={card.percent} backgroundColor={card.backgroundColor} />
                ))}
            </div>
            
        </div>
    )
}