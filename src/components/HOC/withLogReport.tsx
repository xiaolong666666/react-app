//! 反向继承
// 埋点 曝光 上报

const withLogReport =
  (logMapper: Record<string, any>) => (WrapperComponent: any) =>
    class extends WrapperComponent {
      didMount = WrapperComponent.prototype.componentDidMount;

      componentDidMount() {
        this.didMount && this.didMount.call(this);

        Object.entries(logMapper).forEach(([id, value]) => {
          if (document.getElementById(id)) {
            console.log(value);
          }
        });
      }

      render() {
        return super.render();
      }
    };

export default withLogReport;
