import React from 'react'

const PropChild = (myprops) => {

    //console.log(props)
  return (
    <div>

        <h1 style={{color:"green"}}>{myprops.name}</h1>
        <h1 style={{color:"yellow"}}>{myprops.someRandomData}</h1>
        <h1 style={{color:"brown"}}>{myprops.data}</h1>

        <button onClick={myprops.changeMethod}>
            Click Me For Printing From Parent
        </button>



    </div>
  )
}

export default PropChild