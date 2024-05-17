import { configureStore } from "@reduxjs/toolkit"; // 默认安装了 thunk 中间件
import createSagaMiddleware from "redux-saga";
import user from "./user";
import article from "./article";
import workflow from "./workflow";
import rootSaga from "./rootSaga";

const reducer = {
  user,
  article,
  workflow,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
