import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const CategoryFooter = props => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Made with <span style={{ color: "#e25555" }}>&#9829;</span> in San
      Francisco
      <br />
      <a
        href="https://stories.freepik.com/business"
        style={{ fontSize: "8px" }}
      >
        Illustration by Freepik Stories
      </a>
    </Footer>
  );
};

export default CategoryFooter;
