import React, { Component } from "react";

interface Props {
  user: string;
}

class ClassComponent extends Component<Props> {
  showMessage() {
    alert("Followed " + this.props.user);
  }

  handleClick() {
    setTimeout(this.showMessage.bind(this), 3000);
  }

  render() {
    const props = this.props; //! 点击按钮时渲染的状态
    const { user } = this.props; //! 最新状态

    const showMessage = () => {
      alert("Followed " + props.user);
    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return (
      <>
        <h3>Class</h3>
        <p>{user}</p>
        <button onClick={this.handleClick.bind(this)}>Class Follow</button>
        <br />
        <button onClick={handleClick}>Class Function Follow</button>
      </>
    );
  }
}

export default ClassComponent;
