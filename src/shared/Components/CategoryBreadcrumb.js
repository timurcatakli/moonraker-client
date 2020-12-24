import React from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const CategoryBreadcrumb = props => {
  const { cat0, cat1, cat2, onRootChange, onSubCategoryChange } = props;
  const history = useHistory();

  const handleHomeBreadcrumbClick = e => {
    history.push("/");
  };

  const handleRootBreadcrumbClick = e => {
    const { id } = e.target;
    console.log(props[id]);
    onRootChange(props[id].slug, {
      key: props[id].slug,
      value: props[id].slug,
      children: props[id].name
    });
  };

  const handleSubBreadcrumbClick = e => {
    const { id } = e.target;
    console.log(props[id]);
    const level = parseInt(id.substr(-1, 1));
    onSubCategoryChange(props[id].slug, {
      key: props[id].slug,
      value: props[id].slug,
      children: props[id].name,
      level
    });
  };

  return (
    <Breadcrumb style={{ padding: "0px 38px", marginBottom: "16px" }}>
      <Breadcrumb.Item id={"root"} onClick={handleHomeBreadcrumbClick}>
        <HomeOutlined />
      </Breadcrumb.Item>
      {cat0 && (
        <Breadcrumb.Item id={"cat0"} onClick={handleRootBreadcrumbClick}>
          {cat0.name}
        </Breadcrumb.Item>
      )}
      {cat1 && (
        <Breadcrumb.Item id={"cat1"} onClick={handleSubBreadcrumbClick}>
          {cat1.name}
        </Breadcrumb.Item>
      )}
      {cat2 && (
        <Breadcrumb.Item onClick={handleSubBreadcrumbClick} id={"cat2"}>
          {cat2.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};
export default CategoryBreadcrumb;
