import { AreaChart } from '@tremor/react'
import { TopCardData } from '../data'

type TopCardProps = {
    data: TopCardData[],
    color: string,
    title: string,
}

export const TopCard = ({ data, color, title}: TopCardProps) => {
  return (
    <div className={`bg-${color}-300 rounded-lg w-full`}>
        <h1 className="text-white font-bold m-4 text-2xl">{title}</h1>
        <AreaChart 
            data={data} 
            index="Dollars" 
            categories={["Dollars"]} 
            colors={['white']}
            showYAxis={ false }
            showXAxis={ false }
            showLegend={ false }
            showGridLines={ false }
            showGradient={ false }
            curveType="natural"
        />
    </div>
  )
}
