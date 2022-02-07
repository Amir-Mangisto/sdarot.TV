// reducer get 2 args state and action

import { SUCCESS,PRIMARY,SECONDARY,ERROR,INFO ,WARNING } from "../actions/Types";


export const messageReducer = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      return "success" 
    case PRIMARY:
      return "primary";

    case SECONDARY:
      return "secondary";

    case ERROR:
      return "error";

    case INFO:
      return "info";
    case WARNING:
      return "warning";
    default:
      return state;
  }
};
