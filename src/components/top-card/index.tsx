import './styles.scss'

interface Props {
    title: string;
    value: string;
    percent: string;
    backgroundColor: string;
}

export const TopCard = ({title, value, percent, backgroundColor}: Props): JSX.Element => {
    return (
        <div className="wrapper" style={{ backgroundColor: backgroundColor }}>
            <p className="title">{title}</p>
            <p className="value">{value}</p>
            <span className="percent">{percent}</span>
        </div>
    )
}