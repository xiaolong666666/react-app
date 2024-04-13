import type { InitState, Dispatch } from "./redux";
import { connect } from "./react-redux";

const EditInfoAction = () => {
  return { type: "editInfo", payload: { age: 16 } };
};

interface UserProps {
  info: Record<string, any>;
  editInfo: () => void;
}

const User: React.FC<UserProps> = ({ info, editInfo }) => {
  return (
    <>
      <h3>User</h3>
      <div>
        info:
        <pre>{JSON.stringify(info, null, 2)}</pre>
      </div>
      <button onClick={editInfo}>edit Info</button>
    </>
  );
};

const mapStateToProps = (state: InitState) => {
  return {
    info: state.user.info,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    editInfo: () => dispatch(EditInfoAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
