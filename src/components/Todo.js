import React from 'react'
import { useState } from 'react'
import TaskItems from './TaskItems';

const Todo = () => {
   // const [input,setInput]=useState("");

   const [task,setTask]=useState({

    name:"",
    date:""
   })
   
    const [itemsarray,setItemsArray]=useState([]);

   const inputChange=(event)=>{
//console.log(event);

    setTask({...task,[event.target.name]:event.target.value});

   }

   const addToItemArray=()=>{
    itemsarray.push(task);
    setItemsArray([...itemsarray]);

   }

   const removeItem=(index)=>{

    console.log("Remove item clicked",index)

    // Apply operation on array

    // we have to find the item on the basis of index

    // remove the item

    // Set the new array in the state

   }

   /*

 const   handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      itemsarray.push(task);
    setItemsArray([...itemsarray]);
    }
  }
  */

  return (
    <div className={"container"}>
        <h1 style={{textAlign:"center"}}>My ToDo App</h1>
        <div className={"row"} style={{marginTop:"40px"}}>

            <div className={'col-md-6'}>
                <input type={"text"} className={"form-control"} value={task.name}  name={"name"} placeholder={"Task Name"} onChange={inputChange}/> <br></br>
              {/* <input type={"date"} className={"form-control"}  value={task.date} name={"date"} onKeyDown={handleKeyPress} placeholder={"Task End Date"} onChange={inputChange}/> <br></br>*/}  
                <input type={"date"} className={"form-control"}  value={task.date} name={"date"}  placeholder={"Task End Date"} onChange={inputChange}/> <br></br>



                <button className={"btn btn-primary"} onClick={addToItemArray}>
                    Add ToDo
                </button>


            </div>


            <div className={'col-md-6'}>
            <ul className={"list-group"}>
                   {/* <TaskItems data={ele} i={i} />*/}

                {
                    itemsarray.map((ele,i)=>(
                    
                       <li key={i}  className="list-group-item" aria-current="true"><strong>Name - </strong>{ele.name}   <strong>Finish Date -</strong> {ele.date} 
                       <button className={"btn btn-danger"} style={{marginLeft:"20px"}} onClick={()=>removeItem(i)}>
                        Delete
                       </button>
                       
                       </li>


                    ))
                }


</ul>



            </div>


        </div>



    </div>
  )
}

export default Todo