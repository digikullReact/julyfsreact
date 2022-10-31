import React ,{useState} from 'react'
import PropChild from './PropChild'

const Propparent = () => {
    const [state,setState]=useState("Hello From Parent")

    const [data,setData]=useState("Hello Data From Parent")

    const fn=()=>{

       // console.log("Printin out in parent component")
        setData("Child Changed The Value");

    }

    // With props you can pass any kind of data 
    // primitive
    // Objects inc arrays
    // functions

  return (
    <div>
        <h1>{data}</h1>

    <PropChild data={state} someRandomData={89900} name={"Akshay"}  changeMethod={fn} />


    </div>
  )
}

export default Propparent

// Create two components 

// IncrementComponent  --->will incremented values  -->incrrmeent button
// Decrementcomponent  --->will decrement values  --->decrement button

// App component   --->you will have the counter which needs to change