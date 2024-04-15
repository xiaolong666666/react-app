import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Card } from "xl";

const Page = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  return (
    <Card title={`Page ${id}`}>
      <h4>search: </h4>
      x: {searchParams.get("x")}
      <br />
      y: {searchParams.get("y")}
    </Card>
  );
};

export default Page;
