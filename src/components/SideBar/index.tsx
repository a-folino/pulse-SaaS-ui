import './styles.scss'
import { PiSquaresFourFill } from 'react-icons/pi'
import { BsPersonFill } from 'react-icons/bs'
import { IoBag } from 'react-icons/io5'
import { TbCashBanknote } from 'react-icons/tb'
import { useEffect, useRef } from 'react'

interface Props {
    activePage: string;
    setActivePage: (page: string) => void;
}
export const SideBar = ({activePage, setActivePage}: Props):JSX.Element => {
    const dashboardRef = useRef<HTMLLIElement>(null);
    const profileRef = useRef<HTMLLIElement>(null);
    const orderRef = useRef<HTMLLIElement>(null);
    const revenueRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        setActivePage('Dashboard');
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLLIElement;
        setActivePage(target.textContent as string);
    };
    
    return (
        <div className="sidebar">
            <h3 className="logo">PULSE</h3>
            <nav>
                <ul>
                    <li className={activePage === dashboardRef?.current?.textContent ? 'active' : ''} ref={dashboardRef} onClick={(e) => handleClick(e)}><PiSquaresFourFill />Dashboard</li>
                    <li className={activePage === profileRef?.current?.textContent ? 'active' : ''} ref={profileRef} onClick={(e) => handleClick(e)}><BsPersonFill />Profile</li>
                    <li className={activePage === orderRef?.current?.textContent ? 'active' : ''} ref={orderRef} onClick={(e) => handleClick(e)}><IoBag />Order</li>
                    <li className={activePage === revenueRef?.current?.textContent ? 'active' : ''} ref={revenueRef} onClick={(e) => handleClick(e)}><TbCashBanknote />Revenue</li>    
                </ul>
            </nav>
        </div>
    )
}