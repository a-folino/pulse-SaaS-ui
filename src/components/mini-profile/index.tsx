import './styles.scss';
import { NotificationBell } from '../notification-bell';
import { BsChevronDown } from 'react-icons/bs';

export const MiniProfile = (): JSX.Element => {
    return (
        <div className="profile-wrapper">
            <NotificationBell />
            <img className="avatar" src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt="avatar" />
            <h4>{window.localStorage.getItem('fullName')}</h4>
            <BsChevronDown />
        </div>
    )
}