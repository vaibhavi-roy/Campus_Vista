import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list]) //clear old timeout and set up new one
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
