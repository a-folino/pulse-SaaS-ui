import React from 'react'
import { useStore } from '../store'

export const TodayOrders = () => {
  const { count, incrementAsync, decrement } = useStore((state) => state);

  console.log(count);

  return (
    <div className="bg-red-300 w-3/4">
      <h1 className="text-3xl">Today's Orders</h1>
      <p>{count}</p>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
