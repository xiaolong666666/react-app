import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Loading } from "xl";
import { cancel } from "request";

const User = () => {
  const { loading, users, message } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  // const queryUsersWithThunk = useCallback(
  //   () =>
  //     request.get("/api/users").then((res) => {
  //       console.log(res.data);
  //     }),
  //   []
  // );

  const queryList = useCallback(() => {
    // @ts-ignore
    // dispatch(queryUsersWithThunk);
    dispatch({ type: "USER_FETCH", payload: { userId: "1001" } });
  }, [dispatch /* queryUsersWithThunk */]);

  useEffect(() => {
    queryList();
  }, [queryList]);

  return (
    <Card title="User">
      {/* @ts-ignore */}
      <button onClick={cancel}>cancel</button>

      {loading ? (
        <Loading />
      ) : !!message ? (
        <p>{message}</p>
      ) : (
        <pre>{JSON.stringify(users, null, 4)}</pre>
      )}
    </Card>
  );
};

export default User;
