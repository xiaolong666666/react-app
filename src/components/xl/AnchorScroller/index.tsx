import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { debounce } from "@/utils/tools";
import styles from "./index.module.less";

interface DataSource {
  id: string;
  title: string;
  [propertyKey: string]: string;
}

interface Props {
  dataSource: DataSource[];
}

enum Behavior {
  CLICK = "CLICK",
  SCROLL = "SCROLL",
}

const AnchorScroller: React.FC<Props> = ({ dataSource }) => {
  const [activeGroup, setActiveGroup] = useState<DataSource["id"]>(
    dataSource[0]?.id
  );
  const containerRef: any = useRef<HTMLElement>();
  const behavior = useRef<Behavior>(Behavior.SCROLL);

  const changeScrollBehavior = () => {
    if (behavior.current === Behavior.CLICK) {
      behavior.current = Behavior.SCROLL;
    }
  };

  const changeScrollBehaviorDebounce = debounce(changeScrollBehavior, 100);

  const onScroll = (event: any) => {
    if (behavior.current === Behavior.CLICK) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerChildren: any[] = Array.from(containerRef.current.children);
    const headerHeight: number = containerChildren
      .find((child) => child.className.includes("header"))
      .getBoundingClientRect().height;
    const section: any = containerChildren.find(
      (child) => child.tagName === "SECTION"
    );
    Array.from(section.children).forEach((child: any) => {
      const childRect = child.getBoundingClientRect();
      if (childRect.top - rect.top <= headerHeight) {
        setActiveGroup(child.id);
      }
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", onScroll, false);
      containerRef.current.addEventListener(
        "scroll",
        changeScrollBehaviorDebounce,
        false
      );
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener("scroll", onScroll, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener(
          "scroll",
          changeScrollBehaviorDebounce,
          false
        );
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMenuClick = (id: DataSource["id"]) => {
    behavior.current = Behavior.CLICK;
    if (containerRef.current) {
      const containerStyle = getComputedStyle(containerRef.current);
      const containerBorderWidth = parseInt(containerStyle.borderWidth, 10);

      const containerChildren: any[] = Array.from(
        containerRef.current.children
      );
      const headerHeight: number = containerChildren
        .find((child) => child.className.includes("header"))
        .getBoundingClientRect().height;
      setActiveGroup(id);
      containerRef.current.scrollTo({
        top:
          containerRef.current.querySelector(`#${id}`)?.offsetTop -
          headerHeight +
          containerBorderWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        {dataSource.map(({ id, title }) => (
          <div
            key={id}
            onClick={() => onMenuClick(id)}
            className={classNames(
              styles.menu,
              id === activeGroup ? styles.active : ""
            )}
          >
            {title}
          </div>
        ))}
      </div>
      <section className={styles.main}>
        {dataSource.map(({ id, title, height }) => (
          <div key={id} id={id} style={{ height, background: `#${title}` }}>
            {title}
          </div>
        ))}
      </section>
    </div>
  );
};

export default AnchorScroller;
