import { all, fork } from "redux-saga/effects";
import userSaga from "./user/saga";
import articleSaga from "./article/saga";

// 合并sagas
function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(articleSaga),
    // 可以继续添加更多的sagas
  ]);
}

export default rootSaga;
