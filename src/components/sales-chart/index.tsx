import './styles.scss';
import { CardDataProps } from "../../types/types";

interface Props {
    cardData: CardDataProps[];
}

export const SalesChart = ({ cardData }: Props) => {
    return (
        <div className="sales-chart-wrapper">
            <h3>Sales</h3>
        </div>
    )
}