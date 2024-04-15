import {
  Fragment,
  ReactNode,
  useLayoutEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import styles from "./index.module.less";

interface Props {
  dataSource: Record<string, any>[];
  pageSize?: number | string;
  children: (item: Record<string, any>) => ReactNode;
}

const VirtualList: React.FC<Props> = ({
  dataSource,
  pageSize = 10,
  children,
}) => {
  const size = useMemo(() => Number(pageSize), [pageSize]);
  const length = useMemo(() => dataSource.length, [dataSource]);
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(size);
  const [offset, setOffset] = useState(0);
  const virtualList = useMemo(
    () => dataSource.slice(startIdx, Math.min(endIdx + 1, length)),
    [dataSource, startIdx, endIdx, length]
  );
  const [itemHieght, setItemHieght] = useState(0);
  const containerRef = useRef<any>();

  useLayoutEffect(() => {}, []);

  const onScroll = useCallback(
    (e: any) => {
      const scrollTop = e.target.scrollTop;
      const newStartIdx = Math.floor(scrollTop / itemHieght);
      const newEndIdx = newStartIdx + size;
      const newOffset = scrollTop - (scrollTop % itemHieght);
      setStartIdx(newStartIdx);
      setEndIdx(newEndIdx);
      setOffset(newOffset);
    },
    [itemHieght, size]
  );

  useLayoutEffect(() => {
    const overlayElement = Array.prototype.find.call(
      containerRef.current.children,
      (el) => el.className.includes("overlay")
    );

    const listElement = Array.prototype.find.call(
      containerRef.current.children,
      (el) => el.className.includes("list")
    );

    if (containerRef.current) {
      containerRef.current.style.height = `${itemHieght * size}px`;
      containerRef.current.addEventListener("scroll", onScroll, false);
    }

    if (overlayElement) {
      overlayElement.style.height = `${itemHieght * length}px`;
    }

    if (listElement) {
      const currentItemHeight = parseInt(
        window.getComputedStyle(listElement.children[0]).height,
        10
      );
      setItemHieght(currentItemHeight);
    }
  }, [itemHieght, length, onScroll, size]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.overlay} />
      <div
        className={styles.list}
        style={{ transform: `translateY(${offset}px)` }}
      >
        {virtualList.map((item) => (
          <Fragment key={item.id}>{children(item)}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
