import { MiniProfile } from "../mini-profile";
import './styles.scss';

export const DashboardHeader = (): JSX.Element => {
    return (
        <div className="dashboard-header">
            <h2>Welcome, {window.localStorage.getItem('firstName')}</h2>
            <MiniProfile />
        </div>
    )
}