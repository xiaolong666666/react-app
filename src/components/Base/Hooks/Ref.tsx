import { useRef } from "react";
import { Dialog } from "xl";

const Ref = () => {
  const inputRef = useRef<any>();
  const dialogRef = useRef<any>();

  const onFocus = () => {
    inputRef.current.focus();
  };

  const onShow = () => {
    dialogRef.current.open();
  };

  const onHidden = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <h3>Ref</h3>
      <input type="text" ref={inputRef} />
      <button onClick={onFocus}>focus</button>
      <br />
      <button onClick={onShow}>show</button>
      <button onClick={onHidden}>hidden</button>
      <Dialog ref={dialogRef} title="确认"></Dialog>
    </>
  );
};

export default Ref;
