import React from 'react'

export const App: React.FC = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div className="container w-full h-full mx-auto space-y-5 flex flex-col items-center justify-center">
      <h1>Count Up</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  )
}
