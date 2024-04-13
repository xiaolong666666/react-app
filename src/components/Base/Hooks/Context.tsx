import { createContext, Component, useState, useContext } from "react";

const Context = createContext({ theme: "lighter" });

type ValueProps = {
  theme: string;
  [propertyKey: string]: any;
};

type ProviderProps = {
  value: ValueProps;
  children: React.ReactNode;
};

export const ContextProvider: React.FC<ProviderProps> = ({
  children,
  value,
}) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Parent = () => {
  const [theme, setTheme] = useState<string>("lighter");

  return (
    <ContextProvider value={{ theme }}>
      <h3>Context</h3>
      <button
        onClick={() => setTheme(theme === "lighter" ? "dark" : "lighter")}
      >
        onChangeTheme
      </button>
      <A />
      <B />
      <C />
    </ContextProvider>
  );
};

class A extends Component {
  static contextType = Context;

  render() {
    const { theme }: any = this.context;
    return <div>A: {theme}</div>;
  }
}

class B extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ theme }) => <div>B: {theme}</div>}
      </Context.Consumer>
    );
  }
}

const C = () => {
  const { theme } = useContext(Context);
  return <div>C: {theme}</div>;
};

export default Parent;
