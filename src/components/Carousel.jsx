import React, {useState} from  'react';
import ass2img2 from "./img/ass2img2.jpeg";
import ass2img3 from "./img/ass2img3.jpeg";
import ass2img4 from './img/ass2img4.jpeg';






const App = ()=>{
const [state, setState] = useState(0)

const addNum = ()=>{
  setState(state + 1)
}

const subtractNum = ()=>{
  if (state <= 0){
    setState(0)
  }else{
    setState(state - 1)
  }
}

const [data, setData] = useState([
  "i love code",
  "The boy is good",
  "i like mysef"
])
const [image, setImage] = useState([
  ass2img2, ass2img3, ass2img4,
])




  return(
    <>
      <button onClick={addNum}>+</button>
      <div>
      <img src={image[state % image.length]} alt='' width={"20%"}/>
      <h1>{data[state % data.length]}</h1>
      </div>
      <button onClick={subtractNum}>-</button>
    </>
  )
}




export default App