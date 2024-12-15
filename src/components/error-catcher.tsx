import React from 'react'

interface Props {
  title: string
  code: string
  message: string
}

export const ErrorCatcher: React.FC<Props> = ({ title, code, message }) => {
  return (
    <div className="max-w-[80%] *:w-full py-14 space-y-3.5 text-center flex flex-col items-center overflow-hidden">
      <h5 className="text-lg font-semibold uppercase">{title}</h5>
      <p className="font-mono text-wrap">{`${code}: ${message}`}</p>
    </div>
  )
}
