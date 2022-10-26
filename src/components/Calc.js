import React ,{useState}from 'react'

const Calc = () => {

    const [state,setState]=useState({

        input1:0,
        input2:0,
        input3:0
    });

   // const [state2,setState2]=useState(0);
    //const [state3,setState3]=useState(0);


    const inputChange=(event)=>{

        //console.log(event.target.name);
       // console.log(event.target.value);


        setState({...state,[event.target.name]:Number(event.target.value)})

    }

    /*
    const change1=(event)=>{
     
       
        setState(Number(event.target.value))

    }

    const change2=(event)=>{
        setState2(Number(event.target.value))

    }
    */

    const clickMe=()=>{
     setState({...state,input3:state.input1+state.input2});
     //console.log(state);

    }

  return (
    <div>
    <input type={"text"} className={"form-control"} name={"input1"} onChange={inputChange}/>  <br></br>

    <input type={"text"} className={"form-control"} name={"input2"} onChange={inputChange} /> <br></br>

    <input type={"text"} className={"form-control"} name={"input3"}  value={state.input3} /> <br></br>

    <button className={"btn btn-success"}  onClick={clickMe}>
        Add Numbers
    </button>


    </div>
  )
}

export default Calc