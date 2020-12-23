import React, { useState, useReducer, useEffect } from "react";
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
import reducer from "./reducer";

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
  const initialState = {
    rootCategory: {
      id: props.id,
      name: props.name,
      link: props.link
    },
    activeCategory: {
      id: props.id,
      name: props.name,
      link: props.link,
      sortBy: SORT_BY_FIELDS[0].key,
      sortOrder: SORT_ORDER_FIELDS[0].key
    },
    children: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, error, data } = useQuery(CATEGORY_BESTSELLERS, {
    variables: {
      url: state.activeCategory.link,
      sortBy: state.activeCategory.sortBy,
      sortOrder: state.activeCategory.sortOrder
    }
  });
  // const loading = true;
  console.log(state);
  const { categoryBestsellers = {} } = data || {};
  const currentCategory = categoryBestsellers.current_category || {};
  const parentCategory = categoryBestsellers.parent_category || {};
  const childCategories = categoryBestsellers.child_categories || [];
  console.log(childCategories);

  // useEffect(() => {
  //   console.log(childCategories);
  // });

  const handleRootChange = (value, data) => {
    history.push(`/best-sellers/${value}`);
    dispatch({
      type: "changeRootCategory",
      category: data,
      children: childCategories
    });
  };

  const handleFilterChange = filter => {
    dispatch({ type: "changeFilter", filter });
  };

  return (
    <Layout>
      {/* <CategorySider
        currentCategory={currentCategory}
        parentCategory={parentCategory}
        childCategories={childCategories}
        onChange={handleCategoryChange}
        loading={loading}
      /> */}
      <Layout>
        <CategoryHeader
          rootId={state.rootCategory.id}
          rootName={state.rootCategory.name}
          rootLink={state.rootCategory.link}
          activeId={state.activeCategory.id}
          activeName={state.activeCategory.name}
          activeLink={state.activeCategory.link}
          activeSortBy={state.activeCategory.sortBy}
          activeSortOrder={state.activeCategory.sortOrder}
          onRootChange={handleRootChange}
          onFilterChange={handleFilterChange}
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
