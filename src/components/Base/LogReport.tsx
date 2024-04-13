import { Component } from "react";
import withLogReport from "@/components/HOC/withLogReport";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h3>MyComponent</h3>
        <div id="xl_text">xl_text</div>
        <button id="xl_button">xl_primary_button</button>
      </div>
    );
  }
}

const MyComponentLogReport = withLogReport({
  xl_button: "事件曝光：xl_primary_button_report",
})(MyComponent);

export default MyComponentLogReport;
