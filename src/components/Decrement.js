import React from 'react'

const Decrement = (props) => {
  return (
    <div>

<button  className='btn btn-info' onClick={props.decrement}>
    Decrement
    
 </button>
    </div>
  )
}

export default Decrement