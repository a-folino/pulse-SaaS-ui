import { OrdersTable } from '../../components/orders-table'
import './styles.scss'

export const Order = (): JSX.Element => {
    return (
        <div className='container'>
            <h2>Order</h2>
            <OrdersTable />
        </div>
    )
}