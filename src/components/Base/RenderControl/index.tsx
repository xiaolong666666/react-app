import React, { Component, memo } from "react";
import { Card } from "xl";

const Child = memo(({ number }: { number: number }) => {
  console.log("child");
  return (
    <div>
      <h4>Child</h4>
      <p>Child Number: {number}</p>
    </div>
  );
});

class RenderControl extends Component {
  state = {
    number: 0,
    counter: 0,
  };

  childComponent = (<Child number={this.state.number} />);

  controlRenderChild = () => {
    const { props } = this.childComponent;
    if (props.number !== this.state.number) {
      return (this.childComponent = React.cloneElement(this.childComponent, {
        number: this.state.number,
      }));
    }
    return this.childComponent;
  };

  render() {
    const { number, counter } = this.state;
    return (
      <Card title="RenderControl">
        {this.controlRenderChild()}
        {/* <Child number={number} /> */}
        <button onClick={() => this.setState({ number: number + 1 })}>
          Number: {number}
        </button>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          Counter: {counter}
        </button>
      </Card>
    );
  }
}

export default RenderControl;
