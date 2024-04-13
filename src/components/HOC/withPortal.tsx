import { forwardRef } from "react";
import Portal from "./Portal";

const withPortal = (WarpperComponent: any) =>
  forwardRef((props: any, ref) => (
    <Portal>
      <WarpperComponent {...props} ref={ref} />
    </Portal>
  ));

export default withPortal;
