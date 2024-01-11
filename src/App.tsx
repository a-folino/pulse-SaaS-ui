import { Nav } from './components/Nav'
import { TodayEarnings } from './components/TodayEarnings'
import { TodayOrders } from './components/TodayOrders'
import { MonthlyRevenue } from './components/MonthlyRevenue'
import { ItemsSold } from './components/ItemsSold'

export const App = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Nav />
      <TodayEarnings />
      <TodayOrders />
      <MonthlyRevenue />
      <ItemsSold />
    </div>
  )
}
