import { TopCard } from '../../components/top-card';
import './styles.scss';
import { monthlyData } from '../../data/data';
import { weeklyData } from '../../data/data';
import { useEffect, useState } from 'react';
import { DashboardHeader } from '../../components/dashboard-header';
import { SalesChart } from '../../components/sales-chart';
import { CardDataProps } from '../../types/types';
import { AcquisitionChart } from '../../components/acquisition-chart';

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
            <div className="top-dashboard">
                <button className="change-card-data" onClick={() => cardData === weeklyData ? setCardData(monthlyData) : setCardData(weeklyData) }>{cardData === weeklyData ? 'VIEW MONTHLY STATS' : 'VIEW WEEKLY STATS'}</button>
                <div className="top-cards">
                    {cardData?.map(card => (
                        <TopCard title={card.title} value={card.value} percent={card.percent} backgroundColor={card.backgroundColor} />
                    ))}
                </div>
            </div>
            <div className="middle-dashboard">
                <SalesChart cardData={cardData!} />
                <AcquisitionChart cardData={cardData!} />
            </div>
        </div>
    )
}