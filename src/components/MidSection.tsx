import React from 'react'
import { SingleCard } from './SingleCard'
import { MonthlyAcquisition } from './MonthlyAcquisition'

export const MidSection = () => {
  return (
    <div className="flex flex-col gap-10 my-10">
        <SingleCard title="Sales" data={''} />
        <MonthlyAcquisition />
    </div>
  )
}
