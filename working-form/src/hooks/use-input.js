import { useReducer } from "react";
const initialState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "Input") {
    return {
      ...state,
      value: action.payload,
    };
  } else if (action.type === "Blur") {
    return {
      ...state,
      isTouched: true,
    };
  } else if (action.type === "Reset") {
    return initialState;
  }
  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({
      type: "Input",
      payload: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({
      type: "Blur",
    });
  };

  const reset = () => {
    dispatch({ type: "Reset" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
