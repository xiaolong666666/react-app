import { useReducer } from "react";

type State = {
  counter: any;
  [propertyKey: string]: any;
};

type Action = { type: string; payload?: any };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state.counter;
  }
};

const Reducer = () => {
  const initState = { counter: 0 };
  // TODO: 让数据可预测
  const [store, dispatch] = useReducer(reducer, initState);
  const { counter } = store;

  return (
    <>
      <h3>Reducer</h3>
      <p>counter: {counter}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        change counter
      </button>
    </>
  );
};

export default Reducer;
