import React from 'react';
import { useState, useEffect, useRef } from 'react';


const name = 'Sophida';
let now = new Date(2024, 10, 26, 6);


function App(){
  //const [count, setCount] = React.useState(0);
  const [time, setTime] = useState(new Date);
  const count = useRef(0);

function greeting(){
  if (time.getHours() <12){
    return 'Good morning';
  }

else if (time.getHours()<=18){
  return 'Good afternoon';}
else {
  return 'Good evening';
}
}
  
  function handleClick() {
    console.log((new Date).toLocaleString());
    count.current = count.current +1;
    console.log(count);
    //setCount(count+1);
  }

  useEffect(()=>{
     const id=setInterval(()=>setTime(new Date), 1000);
     return ()=>clearInterval(id);
  }, []);


  return (
    <div>
      <h1>{time.toLocaleTimeString()}: </h1>
  <p>{greeting()}, <b>{name}</b></p>
  <button onClick={handleClick}> Refresh: {count.current}</button>
  </div>);
}

// function App2(){
//   const [count, setCount] = React.useState(0);

//   function handleClick() {
//     console.log((new Date).toLocaleString());
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <h1>{now.toLocaleTimeString()}: </h1>
//   <p>{greeting()}, <b>{name}</b></p>
//   <button onClick={handleClick}>Refresh: {count}</button>
//   </div>) ; 
// }

export {App};