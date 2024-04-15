import { Component } from "react";
import withLogReport from "@/components/HOC/withLogReport";
import { Card } from "xl";

class BaseLogReport extends Component {
  render() {
    return (
      <Card title="LogReport">
        <div id="xl_text">xl_text</div>
        <button id="xl_button">xl_primary_button</button>
      </Card>
    );
  }
}

const LogReport = withLogReport({
  xl_button: "事件曝光：xl_primary_button_report",
})(BaseLogReport);

export default LogReport;
