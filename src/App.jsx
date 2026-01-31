import { useEffect, useState } from "react"

function App() {
  
return (
   <div>
      
       <EffectHook/>

   </div>


)
  
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
