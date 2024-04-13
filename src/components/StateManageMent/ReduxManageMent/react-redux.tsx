import { createContext, useContext, useEffect, useState, FC } from "react";
import type { Store } from "./redux";

const StoreContext = createContext({});

type ProviderProps = {
  store: Store;
  children: React.ReactNode;
};

export const Provider: FC<ProviderProps> = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const connect =
  (
    mapStateToProps: (sate: Store["getState"]) => Record<string, any>,
    mapDispatchToProps: (dispatch: Store["dispatch"]) => Record<string, any>
  ) =>
  (WrapperComponet: any) =>
  (props: Record<string, any>) => {
    const [, setRefresh] = useState<boolean>(false);
    const store = useContext<Record<string, any>>(StoreContext);
    const forceUpate = () => setRefresh((refresh) => !refresh);

    useEffect(() => {
      store.subscribe(forceUpate);
    }, [store]);

    return (
      <StoreContext.Consumer>
        {() => (
          <WrapperComponet
            {...props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        )}
      </StoreContext.Consumer>
    );
  };

export default <div />;
