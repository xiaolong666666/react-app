import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  el?: Element;
};

const Portal: React.FC<PortalProps> = ({ el = document.body, children }) => {
  return createPortal(children, el);
};

export default Portal;
