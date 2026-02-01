import { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  
return (
  <>
     <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/add-count" element={<State/>}/>
           <Route path="/countdown" element={<EffectHook/>}/>
        </Routes>
     </BrowserRouter>  
  
  
  </>


)
  
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
