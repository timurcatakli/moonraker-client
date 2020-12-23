import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Layout, Spin } from "antd";
import { useQuery } from "@apollo/client";
import { LoadingOutlined } from "@ant-design/icons";
import { CATEGORY_BESTSELLERS } from "../../shared/gql";
import SITE_CONFIG from "../../shared/config";
import {
  ROOT_CATEGORIES,
  SORT_ORDER_FIELDS,
  SORT_BY_FIELDS
} from "../../shared/constants";
import {
  CategoryFooter,
  CategoryHeader,
  CategorySider,
  CategoryContent
} from "../../shared/Components/";

const { Content } = Layout;
const ContentContainerWrapper = styled(Content)`
  margin: 0px 24px;
  height: 100%;
  background-color: white;
  border-radius: ${SITE_CONFIG.borderRadius};
`;

const ContentWrapper = styled.div`
  height: 100%;
  padding: 24px;
`;

const LoadingContentWrapper = styled.div`
  margin-top: 30px;
  font-size: 16px;
`;

const LoadingContent = (
  <LoadingContentWrapper>Fetching latest prices...</LoadingContentWrapper>
);

const loadingIndicator = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const Category = props => {
  const { id, name, link } = props;
  const history = useHistory();
  const [activeCategory, setActiveCategory] = useState({
    id,
    name,
    link,
    sortBy: SORT_BY_FIELDS[0].key,
    sortOrder: SORT_ORDER_FIELDS[0].key
  });
  const { loading, error, data } = useQuery(CATEGORY_BESTSELLERS, {
    variables: {
      url: activeCategory.link,
      sortBy: activeCategory.sortBy,
      sortOrder: activeCategory.sortOrder
    }
  });
  // const loading = true;

  const { categoryBestsellers = {} } = data || {};
  const currentCategory = categoryBestsellers.current_category || {};
  const parentCategory = categoryBestsellers.parent_category || {};
  const childCategories = categoryBestsellers.child_categories || [];

  const handleCategoryChange = category => {
    setActiveCategory({ ...activeCategory, ...category });
  };
  return (
    <Layout>
      <CategorySider
        currentCategory={currentCategory}
        parentCategory={parentCategory}
        childCategories={childCategories}
        onChange={handleCategoryChange}
        loading={loading}
      />
      <Layout>
        <CategoryHeader
          id={activeCategory.id}
          name={activeCategory.name}
          link={activeCategory.link}
          sortBy={activeCategory.sortBy}
          sortOrder={activeCategory.sortOrder}
          onChange={handleCategoryChange}
        />
        <ContentContainerWrapper>
          <Spin
            delay={200}
            indicator={loadingIndicator}
            spinning={loading}
            size="large"
            tip={LoadingContent}
            wrapperClassName="loading-spinner"
          >
            <ContentWrapper>
              <CategoryContent
                loading={loading}
                data={categoryBestsellers.bestsellers}
              />
            </ContentWrapper>
          </Spin>
        </ContentContainerWrapper>
        <CategoryFooter />
      </Layout>
    </Layout>
  );
};

export default Category;
