import React from 'react'
import { useState } from 'react'
import TaskItems from './TaskItems';

const Todo = () => {
   // const [input,setInput]=useState("");

   const  [count,setCount]=useState(0);
   const [editMode,setEditMode]=useState(false);

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

    setTask({

      name:"",
      date:""
     })

   }

   const increment=()=>{
   // count++ // count =count+1
    setCount(count+1);

   }

   const removeItem=(index)=>{

    //console.log("Remove item clicked",index)

    // Apply operation on array

    // we have to find the item on the basis of index

    // remove the item  from an array on the basis of index

    // Set the new array in the state
   itemsarray.splice(index,1);

    setItemsArray([...itemsarray]);

   }


   const populateEditData=(ele)=>{

    setTask({

      name:ele.name,
      date:ele.date
     })

     // We will also enable the edit mode

     setEditMode(true);
   }

   const editItem=()=>{
     console.log(task)

     // We have to delete the old data 
     // We have to enter the new data --->
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
                <input type={"date"} className={"form-control"}  value={task.date} name={"date"}  placeholder={"Task End Date"} onChange={inputChange}/> <br/>

               {
                editMode?

<button className={"btn btn-primary"} onClick={editItem}>
Edit ToDo
</button> : <button className={"btn btn-primary"} onClick={addToItemArray}>
Add ToDo
</button>
               }

            

           

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

                       <button className={"btn btn-danger"} style={{marginLeft:"20px"}} onClick={function (){

return populateEditData(ele);

}}>
                        Edit
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