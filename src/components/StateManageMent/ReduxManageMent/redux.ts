export type InitState = Record<string, any>;

type Action = { type: string; payload?: any };

type ActionFunction = () => Action;

type Reducer = (state: InitState, action: Action) => InitState;

type Reducers = {
  [key: string]: Reducer;
};

type Listener = () => void;

export type Dispatch = (action: ActionFunction | Action) => void;

type Subscribe = (listener: Listener) => void;

export type Store = {
  getState: () => InitState;
  dispatch: Dispatch;
  subscribe: Subscribe;
};

type CombineReducers = (reducers: Reducers) => Reducer;

export const createStore = (reducer: Reducer, initState: InitState): Store => {
  let state = initState;
  const listeners: Listener[] = [];

  const getState = () => state;

  const dispatch: Dispatch = (action) => {
    state = reducer(state, typeof action === "function" ? action() : action);
    listeners.forEach((listener) => listener());
  };

  const subscribe: Subscribe = (listener) => {
    listeners.push(listener);
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export const combineReducers: CombineReducers =
  (reducers) => (state: InitState, action: Action) =>
    Object.keys(reducers).reduce(
      (acc, key) => ({
        ...acc,
        [key]: reducers[key](state[key], action),
      }),
      state
    );
