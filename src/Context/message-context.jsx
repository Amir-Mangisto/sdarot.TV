import {createContext,useReducer} from "react";
import {messageReducer} from "../reducer/message-reducer"


export const msgContext=createContext();


export const MsgProvider = ({children})=>{
    //using useReducer hook that take 2 args: reducer and state
    const [mess,dispatch]=useReducer(messageReducer,{isOpen:false})

    return(
        <msgContext.Provider value={{mess,dispatch}}>
            {children}
        </msgContext.Provider>
    )
}


