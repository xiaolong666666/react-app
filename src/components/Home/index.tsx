import { Nav } from "xl";

const Home = () => {
  const dataSource = [
    {
      to: "/",
      label: "Welcome to !",
    },
  ];
  return (
    <>
      <Nav dataSource={dataSource} />
    </>
  );
};

export default Home;
