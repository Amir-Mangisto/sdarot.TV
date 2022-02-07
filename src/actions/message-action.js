import { SUCCESS,PRIMARY,SECONDARY,ERROR,INFO,WARNING } from "./Types";


// creating action

export const message = (value) => {
  return {
    type: SUCCESS,
  };
};

export const Primary = () => {
  return {
    type: PRIMARY,
  };
};

export const Secondary = () => {
  return {
    type: SECONDARY,
  };
};

export const Error = () => {
  return {
    type: ERROR,
  };
};

export const Info = () => {
  return {
    type: INFO,
  };
};

export const Warning = () => {
  return {
    type: WARNING,
  };
};
