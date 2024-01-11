import { AreaChart } from "@tremor/react";
import { todayEarnings } from "../data";


export const TodayEarnings = () => {
  return (
    <div className="bg-green-300 w-3/4 rounded-lg p-6">
        Today's Earnings
        <AreaChart 
            data={todayEarnings} 
            index="Dollars" 
            categories={["Dollars"]} 
            colors={['grey']}
        />
    </div>
  )
}
