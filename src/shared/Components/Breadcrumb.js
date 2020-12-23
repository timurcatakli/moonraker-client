import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb as HeaderBreadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { ROOT_CATEGORY_ID } from "../../shared/constants";

const Breadcrumb = ({ currentCategory, parentCategory, childCategories }) => {
  // const isRoot = parentCategory.id === ROOT_CATEGORY_ID;
  return (
    // <HeaderBreadcrumb style={{ margin: "16px 0" }}>
    //   <HeaderBreadcrumb.Item>
    //     <Link to="/">Home</Link>
    //   </HeaderBreadcrumb.Item>
    //   <HeaderBreadcrumb.Item>{currentCategory.name}</HeaderBreadcrumb.Item>
    // </HeaderBreadcrumb>
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <UserOutlined />
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumb;
