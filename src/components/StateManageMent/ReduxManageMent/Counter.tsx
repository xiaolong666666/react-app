import type { InitState, Dispatch } from "./redux";
import { connect } from "./react-redux";

const IncrementAction = () => {
  return { type: "increment", payload: 2 };
};

const DecrementAction = () => {
  return { type: "decrement", payload: 2 };
};

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>Counter</h3>
      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

const mapStateToProps = (state: InitState) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(IncrementAction()),
    decrement: () => dispatch(DecrementAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
