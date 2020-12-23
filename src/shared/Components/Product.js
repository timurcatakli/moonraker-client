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
  Tooltip
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Truncate from "react-truncate";
import SITE_CONFIG from "../../shared/config";

const ProductWrapper = styled.div``;

const Product = props => {
  const { image, loading, rank, rating, ratingsTotal, title } = props;
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
            <Image width={200} src={image} />
          </div>
          <Divider plain dashed />
          <div>
            <Tooltip placement="topLeft" title={title}>
              <h4>
                <Truncate lines={2} trimWhitespace>
                  {title}
                </Truncate>
              </h4>
            </Tooltip>
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
