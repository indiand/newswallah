import React from 'react'
import spinner from '../images/Spinner.gif'

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center">
        <img src={spinner} alt="spinner" />
    </div>
  )
}
