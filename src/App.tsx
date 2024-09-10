import Router from "@/router";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
// import RouterManageMent from "@/components/RouterManageMent";

function App() {
  return (
    <BrowserRouter basename="/">
      {/* 非根目录时 */}
      {/* /react-base & "homepage": "react-base" */}
      <Header />
      <Layout>
        <Router />
        {/* <RouterManageMent /> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
