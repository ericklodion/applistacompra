import React from 'react'
import ReactSelect from 'react-select'

const ComboBox = (props) => {
  return (
    <ReactSelect
      className='select'
      {...props}
    />
  )
}

export default ComboBox