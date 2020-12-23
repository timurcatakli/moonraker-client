import React from "react";
import { useHistory } from "react-router-dom";
import { Result, Button } from "antd";

const NotFound = () => {
  let history = useHistory();

  const handleHomeClick = () => history.push("/");
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page or category you visited does not exist. Please start browsing from the home page"
      extra={
        <Button type="primary" onClick={handleHomeClick}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
