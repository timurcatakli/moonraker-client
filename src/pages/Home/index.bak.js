import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Select, Layout, Typography, Row, Col, Tag } from "antd";
import { ClockCircleTwoTone } from "@ant-design/icons";
import Hero from "./hero.svg";
import Arrow from "./arrow.svg";
import { CategoryFooter, PageHeader } from "../../shared/Components/";
import categories from "../../shared/categories";

const { Title, Text } = Typography;
const { Option } = Select;

const MainLayoutWrapper = styled(Layout)`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 40px;
`;

const MainContentWrapper = styled(Layout)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 960px;
`;

const TitleWrapper = styled.div`
  padding: 20px;
  line-height: 28px;
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

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
            <TitleWrapper>
              <Title level={1}>
                Save time & money by simply browsing the bestsellers...
              </Title>
              <Text>
                No more losing time researching the bestseller of a category,
                finding the most reviewed product or the highest rated product.
                Pick a category and discover.
              </Text>{" "}
              <Tag
                icon={<ClockCircleTwoTone twoToneColor="#eb2f96" />}
                color="#ff5b83"
              >
                List Updated Daily
              </Tag>
            </TitleWrapper>
            <NavigationWrapper>
              <div>
                <img
                  src={Arrow}
                  width={80}
                  alt="Smart Panda"
                  style={{ color: "gold" }}
                />
              </div>
              <div style={{ marginTop: "14px" }}>
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
          <Col span={catColSpan} align="middle">
            {!isLayoutA && (
              <div style={{ padding: "20px" }}>
                <img src={Hero} width={300} alt="Smart Panda" />
              </div>
            )}
          </Col>
        </Row>
      </MainContentWrapper>
      <CategoryFooter />
    </MainLayoutWrapper>
  );
};

export default Home;
