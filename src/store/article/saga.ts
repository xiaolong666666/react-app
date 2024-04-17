import { call, put, /* takeEvery, */ takeLatest } from "redux-saga/effects";
import request from "request";
import { articleFetch, articleFetchSuccess, articleFetchFailed } from ".";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchArticle(action: any) {
  try {
    yield put(articleFetch());
    const {
      data: {
        data: { list },
      },
      // @ts-ignore
    } = yield call(() => request.get("/articles"), action.payload);
    yield put(articleFetchSuccess({ articles: list }));
  } catch (e: any) {
    yield put(articleFetchFailed({ messgae: e.message }));
  }
}

function* mySaga() {
  yield takeLatest("ARTICLE_FETCH", fetchArticle); // takeEvery takeLatest
}

export default mySaga;
