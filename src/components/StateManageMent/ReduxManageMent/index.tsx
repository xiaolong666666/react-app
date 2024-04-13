import { createStore, combineReducers } from "./redux";
import { Provider } from "./react-redux";
import { Card } from "@/components/xl";
import Container from "./Container";

const initState = {
  counter: { count: 0 },
  user: { info: { name: "xl", age: 18, sex: "boby" } },
};

const counter = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

const user = (state: any, action: any) => {
  switch (action.type) {
    case "editInfo":
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  counter,
  user,
});

export const store = createStore(reducer, initState);

const ReduxManageMent = () => {
  return (
    <Provider store={store}>
      <Card title="ReduxManageMent">
        <Container />
      </Card>
    </Provider>
  );
};

export default ReduxManageMent;
