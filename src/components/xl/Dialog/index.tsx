import React, { useState, forwardRef, useImperativeHandle, Ref } from "react";
import styles from "./index.module.less";

interface DialogProps {
  title: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Dialog: React.FC<DialogProps> = forwardRef(
  (props: any, ref: Ref<any>) => {
    const { title, children } = props;
    const [visible, setVisible] = useState<boolean>(false);

    const open = () => setVisible(true);

    const close = () => setVisible(false);

    useImperativeHandle(ref, () => ({
      open,
      close,
    }));

    return visible ? (
      <div className={styles.overlay}>
        <div className={styles.dialog}>
          <div className={styles.close} onClick={close}>
            ❌
          </div>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.main}>{children}</div>
          <div className={styles.footer}>
            <button onClick={close}>取消</button>
            <button onClick={close}>确认</button>
          </div>
        </div>
      </div>
    ) : null;
  }
);

export default Dialog;
