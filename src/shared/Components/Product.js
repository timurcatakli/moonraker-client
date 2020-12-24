import React from "react";
import styled from "styled-components";
import {
  Badge,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Image,
  Row,
  Typography
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import SITE_CONFIG from "../../shared/config";

const { Paragraph, Title } = Typography;
const ProductWrapper = styled.div``;

const Product = props => {
  const { image, link, loading, rank, rating, ratingsTotal, title } = props;
  const priceLower = props.priceLower || { value: 0, raw: "N/A" };
  const priceUpper = props.priceUpper || { value: 0, raw: "N/A" };
  const existsPriceRange = priceLower.value !== priceUpper.value;
  const priceLabel = existsPriceRange ? "Price Range" : "Price";
  return (
    <ProductWrapper>
      <Badge.Ribbon placement="start" text={rank}>
        <Card
          type="inner"
          size="small"
          hoverable
          loading={loading}
          bodyStyle={{ textAlign: "center" }}
          style={{ borderRadius: SITE_CONFIG.borderRadius }}
        >
          <div>
            <a href={link}>
              <Image width={200} src={image} alt={title} preview={false} />
            </a>
          </div>
          <Divider plain dashed />
          <div style={{ height: "46px" }}>
            <Title level={5}>
              <Paragraph
                ellipsis={{
                  rows: 2
                }}
              >
                {title}
              </Paragraph>
            </Title>
          </div>
          <Divider plain dashed />
          <Descriptions bordered column={1}>
            <Descriptions.Item label={priceLabel}>
              {!existsPriceRange && priceLower.raw}
              {existsPriceRange && `${priceLower.raw} - ${priceUpper.raw}`}
            </Descriptions.Item>
            <Descriptions.Item label="Rating">
              {rating || 0} / 5
            </Descriptions.Item>
            <Descriptions.Item label="Ratings Count">
              {ratingsTotal || 0}
            </Descriptions.Item>
          </Descriptions>
          <Row gutter={24} style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Button
                style={{ padding: "0px 20px" }}
                href={link}
                type="primary"
                shape="round"
                icon={<ShoppingCartOutlined />}
                size="large"
              >
                Go to Store
              </Button>
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </ProductWrapper>
  );
};

export default Product;
