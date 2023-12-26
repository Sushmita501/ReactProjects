import { useState } from "react";

export default function Count() {
  let [counter, setCounter] =  useState(10)

  const addValue = () => {
    if(counter < 20){
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      setCounter(counter);
    }else{
      alert("value can't be more than 20");
    }
  };

  const decValue = () => {
    if(counter >0 ){
      counter = counter - 1;
      counter = counter - 1;
      counter = counter - 1;
      counter = counter - 1;
      setCounter(counter);
    }else{
      alert("value can't be negative");
    }
  };

  return (
    <>     
      <h2>Counter value: {counter}</h2>     
      <button onClick={addValue}>Add value</button><br />
      <button onClick={decValue}>Decrease value</button>
    </>
  )
}