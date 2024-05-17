import { createSlice } from "@reduxjs/toolkit";

export type Node = {
  id: string;
  name: string;
  attribute: string;
  note: string;
};

export type Edge = {
  id: string;
  source: string;
  target: string;
};

const initialState = {
  nodeList: [
    {
      id: "1001",
      name: "start",
      attribute: "start_node_attribute",
      note: "start_node_note",
    },
    {
      id: "1002",
      name: "end",
      attribute: "end_node_attribute",
      note: "end_node_note",
    },
  ],
  edgeList: [{ id: "2001", source: "start", target: "end" }],
};

const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    addNode: (state, { payload }) => {
      state.nodeList.push(payload.node);
    },
    removeNode: (state, { payload }) => {
      state.nodeList = state.nodeList.filter((node) => node.id !== payload.id);
    },
    updateNode: (state, { payload }) => {
      state.nodeList = state.nodeList.map((node) => {
        if (node.id === payload.node.id) {
          return payload.node;
        }
        return node;
      });
    },
    addEdge: (state, { payload }) => {
      state.edgeList.push(payload.edge);
    },
    removeEdge: (state, { payload }) => {
      state.edgeList = state.edgeList.filter((edge) => edge.id !== payload.id);
    },
    updateEdge: (state, { payload }) => {
      state.edgeList = state.edgeList.map((edge) => {
        if (edge.id === payload.edge.id) {
          return payload.edge;
        }
        return edge;
      });
    },
  },
});

export const {
  addNode,
  removeNode,
  updateNode,
  addEdge,
  removeEdge,
  updateEdge,
} = workflowSlice.actions;

export default workflowSlice.reducer;
