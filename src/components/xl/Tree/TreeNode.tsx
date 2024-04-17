import React, { Component } from "react";
import classNames from "classnames";
import { get, set } from "./refs";
import { OptionsProps } from "./Tree";
import styles from "./index.module.less";

interface TreeNodeProps {
  name: string;
  options: OptionsProps;
}

interface TreeNodeState {
  expand: boolean;
  isChecked: boolean;
}

class TreeNode extends Component<TreeNodeProps, TreeNodeState> {
  static uid = 0;
  uid = TreeNode.uid++;
  state: Readonly<TreeNodeState> = {
    expand: true,
    isChecked: false,
  };

  fetchData = () => {
    const tree = get(this.props.name);
    const defaultValue = tree.tree.props.value;
    if (defaultValue.includes(this.props.options.value)) {
      this.setState({ isChecked: true });
    }
  };

  componentDidMount(): void {
    setTimeout(() => {
      set(this.props.name, this);
      this.fetchData();
    });
  }

  render() {
    const {
      name,
      options: { title, children },
    } = this.props;
    const { expand, isChecked } = this.state;
    const isHasLeaf = (children as Array<OptionsProps>)?.length > 0;

    const onSwitch = (propertyKey: keyof TreeNodeState) =>
      this.setState<any>((prevState: TreeNodeState) => ({
        [propertyKey]: !prevState[propertyKey],
      }));

    return (
      <div className="tree-node">
        <div className={styles.header_wrapper}>
          <div
            onClick={() => onSwitch("expand")}
            className={classNames(
              "iconfont",
              "icon-zhankai",
              expand ? styles.expanded : styles.not_expanded,
              isHasLeaf ? styles.visible : styles.hidden
            )}
          />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => onSwitch("isChecked")}
          />
          <div>{title}</div>
        </div>
        <ul
          className="tree"
          style={{ display: isHasLeaf && expand ? "block" : "none" }}
        >
          {children?.map((option: OptionsProps, idx: number) => (
            <TreeNode
              key={`${name}-${option.value}`}
              name={name}
              options={option}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TreeNode;
