import { useEffect, useRef, useState } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App() {
  
return (
  <>

  <Userefhook/>
     <BrowserRouter>
     <br />
     <br />
       <Link to="/">home</Link>
       |
       <Link to="/add-count">add count</Link>
       |
       <Link to="countdown">Countdown</Link>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/add-count" element={<State/>}/>
           <Route path="/countdown" element={<EffectHook/>}/>
        </Routes>
     </BrowserRouter>  
  
  
  </>


)

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
