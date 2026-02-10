import { useEffect, useRef, useState } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App() {
  const {count , increaseCount} = useCounter();
return (
  <>
   <h1>{count}</h1>
   <button onClick={increaseCount}>increase</button>  
  
  </>


)

//custom Hook
function useCounter(){
  const [count , setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1)
  }
  return {
    count : count,
    increaseCount: increaseCount
  }
}


//useref hook
function Userefhook(){
  const [count , currentcount] = useState(0);
  const timer = useRef();

  function startClock(){
    let value = setInterval(function(){
      currentcount(a=>a+1);
    },1000)

     timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
  }

  return (
    <div>
       {count}
       <button onClick={startClock}>start</button>
       <button onClick={stopClock}>stop</button>
    </div>
  )
}
  
}

function Home(){
  return ( <div>
       welcome to single page application 
  </div>)
}

function State(){
  const [Count , setCount] = useState(true);

  function increaseCount(){
    setCount(Count + 1)
  }

  return (
  
    <div>
      <p>{Count}</p>
      <button onClick={increaseCount}>increase Count</button>
    </div>
 )
}

function EffectHook(){
  const [Count , setCount] = useState(true);

  function increaseCount(){
    setCount(currcount => currcount + 1)
  }

  useEffect(function(){
    setInterval(increaseCount,1000)
  }, [])
  return (
  
    <div>
      {Count}
    </div>
 )
}


export default App
