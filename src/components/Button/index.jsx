import React from 'react'
import { DefaultButton } from './styles'

const Button = ({onClick, text}) => {
    // Returns the component
    return (
        <DefaultButton onClick={onClick}>{text}</DefaultButton>
    )
  }
export default Button