import { AreaChart } from '@tremor/react'
import React from 'react'
import { sales } from '../data'

type SingleCardProps = {
    title: string,
    data?: string,
}

export const SingleCard = ({ title, data }: SingleCardProps) => {
  return (
    <div className="border-grey border-2 rounded-lg pr-6">
        <h1 className="m-4 mb-0 text-2xl">{title}</h1>
        <AreaChart 
            data={sales} 
            categories={['Sales Over Time $']} 
            index="date" 
            className="mb-6"
        />
    </div>
  )
}
