import React, {useState} from 'react';
import Carousel from './components/Carousel';





const App = ()=>{

//   const [state, setState] = useState(0)


// const [data, setData] = useState([

//     "emmanuel is running",
//     "i am a child of God",
//     "let us go!"
// ])


// const handleAdd = ()=>{
//   setState(state +1)
//   if (state >= 2){
//     setState(0)
//   }

// }


  return(
    <>
      {/* <button className='addnum' onClick={handleAdd}>+</button> */}
      {/* <div>
        <h1>{data[state]}</h1>
        <img src='' alt=''/>
      </div>
      <button className='minusnum'>-</button> */}
      <Carousel/>
    </>
  )
}




export default App