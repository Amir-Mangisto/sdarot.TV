import Message from "../Message/Message";
import React, { useContext } from "react";
import { msgContext } from "../../Context/message-context";
import { Show } from "../../actions/message-action";


export default function Home() {
    const {dispatch} = useContext(msgContext);

    const display = ()=>{
       dispatch(Show({isOpen:true}))
    }

  return (
    <div>
      <h1>show: </h1>
      <button onClick={display} >click</button>
      <Message />   
    </div>
  );
}



    