import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorComp = () => {
    const error = useRouteError()
    console.log(error)
  return (
      <h1>{error.status}: {error.statusText}</h1>
  )
}

export default ErrorComp