import React from "react";
import styled from "styled-components";
import { Spin, Row, Col, Divider } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { NoProducts } from "../../shared/Components";
import Product from "./Product";

const CategoryContent = props => {
  const { data, loading } = props;
  const nextData = loading ? Array(50).fill({}) : data;
  if (nextData.length === 0) {
    return <NoProducts />;
  }
  return (
    <Row gutter={[32, 32]}>
      {nextData.map((product, index) => {
        const {
          asin,
          image,
          link,
          position,
          price_lower,
          price_upper,
          rank,
          rating,
          ratings_total,
          title
        } = product;
        return (
          <Col
            key={index}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}
          >
            <Product
              key={asin}
              asin={asin}
              image={image}
              link={link}
              loading={loading}
              position={position}
              priceLower={price_lower}
              priceUpper={price_upper}
              rank={rank}
              rating={rating}
              ratingsTotal={ratings_total}
              title={title}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default CategoryContent;
