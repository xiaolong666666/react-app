import React, { useMemo } from "react";
import { Form, Input, Select } from "antd";
import { useBoolean } from "ahooks";
import { useSelector, useDispatch } from "react-redux";
import CustomTable from "@/components/CustomTable";
import { addNode, removeNode, addEdge, removeEdge } from "@/store/workflow";
import NodeColumns from "./node-columns";
import EdgeColumns from "./edge-columns";
import CustomModal from "@/components/CustomModal";
import { getRandomId } from "@/utils/tools";

const { useForm } = Form;

const List = () => {
  const [nodeVisible, { toggle: onNodeVisibleToggle }] = useBoolean(false);
  const [edgeVisible, { toggle: onEdgeVisibleToggle }] = useBoolean(false);
  const [nodeForm] = useForm();
  const [edgeForm] = useForm();
  const dispatch = useDispatch();
  const { nodeList, edgeList } = useSelector((state: any) => state.workflow);
  const nodeOptions = useMemo(
    () => nodeList.map((node: any) => ({ label: node.name, value: node.name })),
    [nodeList]
  );

  const onNodeAdd = () => {
    const nodeInfo = nodeForm.getFieldsValue();
    const node = { id: getRandomId(), ...nodeInfo };
    dispatch(addNode({ node }));
    onNodeVisibleToggle();
    nodeForm.resetFields();
  };

  const onNodeRemove = (id: string) => {
    dispatch(removeNode({ id }));
  };

  const onEdgeAdd = () => {
    const edgeInfo = edgeForm.getFieldsValue();
    const edge = { id: getRandomId(), ...edgeInfo };
    dispatch(addEdge({ edge }));
    onEdgeVisibleToggle();
    edgeForm.resetFields();
  };

  const onEdgeRemove = (id: string) => {
    dispatch(removeEdge({ id }));
  };

  return (
    <div>
      <CustomTable
        key="node"
        header="Node"
        id="node"
        columns={NodeColumns({ onDelete: onNodeRemove })}
        dataSource={nodeList}
        onAdd={onNodeVisibleToggle}
      />
      <CustomTable
        key="dege"
        header="Edge"
        id="edge"
        columns={EdgeColumns({ onDelete: onEdgeRemove })}
        dataSource={edgeList}
        onAdd={onEdgeVisibleToggle}
      />
      {nodeVisible && (
        <CustomModal
          title="添加节点"
          open={nodeVisible}
          onOk={onNodeAdd}
          onCancel={onNodeVisibleToggle}
          forceRender
        >
          <Form form={nodeForm}>
            <Form.Item name="name" label="名字">
              <Input />
            </Form.Item>
            <Form.Item name="attribute" label="属性">
              <Input />
            </Form.Item>
            <Form.Item name="note" label="备注">
              <Input />
            </Form.Item>
          </Form>
        </CustomModal>
      )}
      {edgeVisible && (
        <CustomModal
          title="添加节点"
          open={edgeVisible}
          onOk={onEdgeAdd}
          onCancel={onEdgeVisibleToggle}
          forceRender
        >
          <Form form={edgeForm}>
            <Form.Item name="source" label="起点">
              <Select options={nodeOptions} />
            </Form.Item>
            <Form.Item name="target" label="终点">
              <Select options={nodeOptions} />
            </Form.Item>
          </Form>
        </CustomModal>
      )}
    </div>
  );
};

export default List;
