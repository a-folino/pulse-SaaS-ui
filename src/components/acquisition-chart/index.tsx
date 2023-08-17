import { CardDataProps } from '../../types/types';
import './styles.scss';

interface Props {
    cardData: CardDataProps[];
}

export const AcquisitionChart = ({ cardData }: Props) => {
    return (
        <div className="acquisition-chart-wrapper">
            <h3>Acquisition</h3>
        </div>
    )
}