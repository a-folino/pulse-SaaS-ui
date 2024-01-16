import React from 'react'
import { TopCard } from './TopCard'
import { itemsSold, monthlyRevenue, todayEarnings, todayOrders } from '../data'

export const TopSection = () => {
  return (
    <div className="flex flex-col items-center gap-10">
        <TopCard data={todayEarnings} color={'green'} title="Today's Earnings" />
        <TopCard data={todayOrders} color={'red'} title="Today's Orders" />
        <TopCard data={itemsSold} color={'blue'} title="Items Sold Today" />
        <TopCard data={monthlyRevenue} color={'yellow'} title="Monthly Revenue" />
    </div>
  )
}
