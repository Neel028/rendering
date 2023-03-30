import React,{useState} from 'react';

function App() {
  let[state,setState]=useState(1);
  let[state1,setState1]=useState(1);
  
  function i4(){
    setState1(state1=state1-1)
  }
  function i3(){
    setState(state=state-1)
  }
  function i2(){
    setState1(++state1)
  }

  function i1(){
    setState(++state)
  }
  
  
  return (
    <div>
      <button onClick={i1}>+1 in frist number</button>
      <button onClick={i2}>+1 in second number</button>
      <button onClick={i3}>-1 in frist number</button>
      <button onClick={i4}>-1 in second number</button>

      <h1>{state}*{state1}={state*state1}</h1>
    </div>
    
  );
  
}

export default App;