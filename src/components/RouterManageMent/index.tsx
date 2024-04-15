import { Card } from "xl";
import { BrowserRouter, Routes, Route } from "./react-router-dom";
import Page from "./Page";
import News from "./Page/News";
import List from "./Page/List";
import About from "./Page/About";

const RouterManageMent = () => {
  const dataSource = [
    { to: "/router-management", label: "Page" },
    { to: "/router-management/news", label: "新闻" },
    { to: "/router-management/list", label: "列表" },
    { to: "/router-management/about", label: "关于" },
  ];
  return (
    <Card title="RouterManageMent">
      <BrowserRouter>
        <ul>
          {dataSource.map((item) => (
            <a
              href={item.to}
              rel="noopener noreferrer"
              style={{ margin: "0 8px" }}
            >
              {item.label}
            </a>
          ))}
        </ul>
        <Routes>
          <Route path="/router-management" element={<Page />} />
          <Route path="/router-management/news" element={<News />} />
          <Route path="/router-management/list" element={<List />} />
          <Route path="/router-management/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Card>
  );
};

export default RouterManageMent;
