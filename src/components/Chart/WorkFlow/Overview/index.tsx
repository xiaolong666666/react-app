import { useCallback, useEffect, useRef, useState } from "react";
import { Descriptions } from "antd";
import { Graph, Shape } from "@antv/x6";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import styles from "./index.module.less";

const Overview = () => {
  const container = useRef<any>();
  const graph = useRef<any>();
  const [nodeInfo, setNodeInfo] = useState<Node | any>();
  const { nodeList, edgeList } = useSelector((state: any) => state.workflow);

  const initGraph = useCallback(() => {
    if (container.current) {
      graph.current = new Graph({
        container: container.current,
        width: 800,
        height: 600,
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
        background: {
          color: "#fffbe6", // 设置画布背景颜色
        },
      });

      graph.current.on("node:mousedown", ({ node }: any) => {
        const data = node?.store.data;
        setNodeInfo(data);
      });
    }
  }, []);

  useEffect(() => {
    initGraph();
  }, [initGraph]);

  const initNode = useCallback(() => {
    if (!isEmpty(nodeList)) {
      nodeList.forEach((nodeInfo: any) => {
        const node = new Shape.Circle({
          ...nodeInfo,
          x: Math.random() * 600,
          y: Math.random() * 600,
          width: 40,
          height: 40,
          id: nodeInfo.name,
          label: nodeInfo.name,
          unMovable: true,
        });

        // 将节点添加到画布
        graph.current.addNode(node);
      });
    }
  }, [nodeList]);

  useEffect(() => {
    initNode();
  }, [initNode]);

  const initEdge = useCallback(() => {
    if (!isEmpty(edgeList)) {
      edgeList.forEach((edgeInfo: any) => {
        const edge = new Shape.Edge({
          source: edgeInfo.source,
          target: edgeInfo.target,
        });

        // 将节点添加到画布
        graph.current.addEdge(edge);
      });
    }
  }, [edgeList]);

  useEffect(() => {
    initEdge();
  }, [initEdge]);

  return (
    <div className={styles.overview_container}>
      <div ref={container} className={styles.graph}></div>
      {!isEmpty(nodeInfo) && (
        <Descriptions
          title="节点信息"
          column={1}
          className={styles.descriptions}
        >
          <Descriptions.Item label="名字">{nodeInfo.name}</Descriptions.Item>
          <Descriptions.Item label="属性">
            {nodeInfo.attribute}
          </Descriptions.Item>
          <Descriptions.Item label="备注">{nodeInfo.note}</Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
};

export default Overview;
