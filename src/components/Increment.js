import React from 'react'

const Increment = (props) => {
  return (
    <div>

  <button   className='btn btn-info'  onClick={props.increment}>
    Increment

  </button>

    </div>
  )
}

export default Increment