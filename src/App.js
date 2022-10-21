import logo from './logo.svg';
import './App.css';
import {useState} from "react";


// what is state --->

// state is just the data stored /showed /visible in your component at particular moment


/**
 * 
 *    [{"price":7899,screensize:"23.8","company":"lenovo","discount":44,"refrate":"60hz":rating:4.4},{"price":7899,screensize:"23.8","company":"lenovo","discount":44,"refrate":"60hz":rating:4.4},
 * {"price":7899,screensize:"23.8","company":"lenovo","discount":44,"refrate":"60hz":rating:4.4},{"price":7899,screensize:"23.8","company":"lenovo","discount":44,"refrate":"60hz":rating:4.4}]
 */

// price - 7899 
// scrrensize-23.8 
// company --Lenovo
// discount- 44

// refrate -60hz
// rating -4.4



function App() {
  //console.log(useState(0))
 const [counter,setCounter] =useState(0)  // {}  // []

 const [value,setValue] =useState("")  // {}  // []



const increment=()=>{

  setCounter(counter+1)

}

const decrement=()=>{
  setCounter(counter-1)



}

const stringchange=()=>{

  //const value=document.getElementById("input").value;
 // console.log(value.toUpperCase());

 setValue(value.toUpperCase());



}


const change=(event)=>{

 // console.log(event.target.value);
  setValue(event.target.value);



}

return(
  <div style={{display:"flex" ,justifyContent:"space-evenly" ,marginTop:"70px"}}>
    <div>
    <button onClick={increment} className={"btn btn-success"}>
 
 Increment
    </button>

    </div>

    <div>
    <button onClick={decrement} className={"btn btn-success"}>
 
 Decrement
    </button>

    </div>

    

    <div>

      <h1 id={"count"}>{counter}</h1>


    </div>



    <div>


<input type={"text"} id={"input"}  onChange={change}/>

<button  onClick={stringchange} className={"btn btn-success"}>
 
  ChangeString
    </button>

    


    </div>

    <h1>{value}</h1>




  </div>


)


}

export default App;
