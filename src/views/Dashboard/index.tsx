import { TopCard } from '../../components/top-card';
import './styles.scss';
import { monthlyData } from '../../data/data';
import { weeklyData } from '../../data/data';
import { useEffect, useState } from 'react';

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
    }, [])

    return (
        <div className='container'>
            
            <h2>Dashboard</h2>
            <p className="change-card-data" onClick={() => cardData === weeklyData ? setCardData(monthlyData) : setCardData(weeklyData) }>Change data</p>
            <div className="top-cards">
                {cardData?.map(card => (
                    <TopCard title={card.title} value={card.value} percent={card.percent} backgroundColor={card.backgroundColor} />
                ))}
            </div>
            
        </div>
    )
}