import { useEffect, useState } from "react"

function App() {
  
return (
   <div>
       <State/>

   </div>


)
  
}

function State(){
  const [isVisibal , setisVisibal] = useState(true);

  function toggle(){
    setisVisibal(!isVisibal);
  }

  return (
  
    <div>
       {isVisibal && <p >hii i am toggled</p>}
       <button onClick={toggle}>click me to toggle</button>
    </div>
 )
}

export default App
