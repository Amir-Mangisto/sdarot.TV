import React, { useContext, useReducer } from "react";
import { messageReducer } from "../../reducer/message-reducer";
import { message } from "../../actions/message-action";
import { msgContext } from "../../Context/message-context";

export default function Message() {
  //taking the hook from the context
  const { mess, dispatch } = useContext(msgContext);

  //using useReducer hook that take 2 args: reducer and state
  // const [mess,dispatch]=useReducer(messageReducer,"message")

  //function that catch the action
  const showMess = () => {
    dispatch(message());
  };

  if (mess.isOpen) {
    return (
      <div>
        <h1>mess : {mess.text}</h1>
        <button onClick={showMess}>success</button>
      </div>
    );
  }
  return (<div>false</div>)
      
  
}
