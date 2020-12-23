import React from "react";
import { useHistory } from "react-router-dom";
import { Result, Button } from "antd";

const NoProducts = () => {
  let history = useHistory();

  const handleHomeClick = () => history.push("/");
  return (
    <Result
      status="warning"
      title="It is not you, it is us!"
      subTitle="Apparently we have the category information but not the product. Please try another category."
      extra={
        <Button type="primary" onClick={handleHomeClick}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoProducts;
