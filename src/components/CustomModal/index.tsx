import { FC, ReactNode } from "react";
import { Modal, ModalProps } from "antd";

interface Props extends ModalProps {
  children: ReactNode;
}

const CustomModal: FC<Props> = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>;
};

export default CustomModal;
