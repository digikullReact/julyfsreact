import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Home from './components/Home';
import Contact from './components/Contact';


function App() {

  let  [state,setState]=useState(0);

/// j svariabls or functions will come here -->

const doSomething=()=>{

//  value++;

  //document.getElementById("heading").innerText=value;
  setState(state++);


    
}

return(
  <div>
    <button onClick={doSomething}>
  Click Me
</button>
<h1 id='heading'>{state}</h1>

  </div>


)


}

export default App;
