import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Loading } from "xl";
import { cancel } from "request";

const User = () => {
  const { loading, articles, message } = useSelector(
    (state: any) => state.article
  );
  const dispatch = useDispatch();

  const queryList = useCallback(() => {
    dispatch({ type: "ARTICLE_FETCH", payload: { articleId: "1001" } });
  }, [dispatch]);

  useEffect(() => {
    queryList();
  }, [queryList]);

  return (
    <Card title="Article">
      {/* @ts-ignore */}
      <button onClick={cancel}>cancel</button>

      {loading ? (
        <Loading />
      ) : !!message ? (
        <p>{message}</p>
      ) : (
        <pre>{JSON.stringify(articles, null, 4)}</pre>
      )}
    </Card>
  );
};

export default User;
