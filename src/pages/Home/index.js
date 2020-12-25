import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Select, Layout, Typography, Row, Col, Tag } from "antd";
import { ClockCircleTwoTone } from "@ant-design/icons";
import SITE_CONFIG from "../../shared/config";
import Hero from "./hero.svg";
import Arrow from "./arrow.svg";
import { CategoryFooter, PageHeader } from "../../shared/Components/";
import categories from "../../shared/categories";

const { Title, Text } = Typography;
const { Option } = Select;

const MainLayoutWrapper = styled(Layout)`
  min-height: 100vh;
  min-width: 360px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 8%;
`;

const MainContentWrapper = styled(Layout)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 760px;
`;

const ContentWrapper = styled.div`
  padding: 0px;
  line-height: 28px;
`;

const NavigationWrapper = styled.div`
  display: flex;
  background-color: tomato;

  .navigation-label {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    font-size: 20px;
    line-height: 1.23;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: -1px;
  }
`;

const Home = props => {
  const history = useHistory();
  const isLayoutA = useMediaQuery({ maxWidth: 768 });
  const catColSpan = isLayoutA ? 24 : 12;

  const onCategoryChange = value => {
    history.push(`best-sellers/${value}`);
  };

  return (
    <MainLayoutWrapper>
      <MainContentWrapper>
        <Row>
          <Col>
            <PageHeader />
          </Col>
        </Row>
        <Row>
          <Col span={catColSpan}>
            <ContentWrapper>
              <div>
                <Title level={1}>
                  Save time & money simply by browsing the bestsellers...
                </Title>
              </div>
              <div
                style={{
                  marginBottom: "1.5em"
                }}
              >
                <Text>
                  No more losing time researching the bestseller of a category.
                  Find the most reviewed or the highest rated product.
                </Text>
              </div>
              <div
                style={{
                  marginBottom: "1.5em"
                }}
              >
                <Tag
                  icon={<ClockCircleTwoTone twoToneColor="#eb2f96" />}
                  color="#ff5b83"
                >
                  List Updated Daily
                </Tag>
              </div>
            </ContentWrapper>
          </Col>
          <Col span={catColSpan} align="middle">
            {!isLayoutA && (
              <div style={{ padding: "20px" }}>
                <img src={Hero} width={300} alt={SITE_CONFIG.siteName} />
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <NavigationWrapper>
              <div style={{ backgroundColor: "gold", width: "60px" }}>
                <img
                  src={Arrow}
                  width="100%"
                  alt={SITE_CONFIG.siteName}
                  style={{ color: "gold" }}
                />
              </div>
              <div style={{ background: "white" }}>
                <Select
                  size="large"
                  autoFocus
                  onChange={onCategoryChange}
                  placeholder="Start by picking a category:"
                  optionFilterProp="name"
                  showSearch
                  style={{ width: 300 }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  {categories.map(category => {
                    const { slug, name } = category;
                    return (
                      <Option value={slug} key={slug}>
                        {name}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </NavigationWrapper>
          </Col>
        </Row>
      </MainContentWrapper>
      <CategoryFooter />
    </MainLayoutWrapper>
  );
};

export default Home;
