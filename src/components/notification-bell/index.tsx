import './styles.scss';
import { BiSolidBell } from 'react-icons/bi';

export const NotificationBell = (): JSX.Element => {
    return (
        <div className="notification-bell">
            <span className="notification-bell__dot"></span>
            <BiSolidBell size={'20px'} />
        </div>
    )
}