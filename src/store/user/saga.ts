import { call, put, /* takeEvery, */ takeLatest } from "redux-saga/effects";
import request from "request";
import { userFetch, userFetchSuccess, userFetchFailed } from ".";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: any) {
  try {
    yield put(userFetch());
    const {
      data: {
        data: { list },
      },
      // @ts-ignore
    } = yield call(() => request.get("/users"), action.payload);
    yield put(userFetchSuccess({ users: list }));
  } catch (e: any) {
    yield put(userFetchFailed({ messgae: e.message }));
  }
}

function* mySaga() {
  yield takeLatest("USER_FETCH", fetchUser); // takeEvery takeLatest
}

export default mySaga;
