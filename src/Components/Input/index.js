import React, { Component, Fragment } from 'react'
import './input.css'

const Input = (props) => {
  return (
        <div>
          <label>{props.label}</label>
          <input
            {...props}
          />
        </div>
    
  )
}

export default Input
