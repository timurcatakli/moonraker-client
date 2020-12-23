import React, { useReducer } from "react";
import styled from "styled-components";
import { Layout, Spin } from "antd";
import { useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { CategoryHeader } from "../../shared/Components/";
import { CATEGORY_BESTSELLERS } from "../../shared/gql";
import SITE_CONFIG from "../../shared/config";
import reducer from "./reducer";
import { CategoryFooter, CategoryContent } from "../../shared/Components/";

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
  const { tree } = props;
  const history = useHistory();
  const params = useParams();
  const { cat0, cat1, cat2, cat3, active } = tree;
  const initialState = {
    cat0,
    cat1,
    cat2,
    cat3,
    active
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, data } = useQuery(CATEGORY_BESTSELLERS, {
    variables: {
      url: state.active.link,
      sortBy: state.active.sortBy,
      sortOrder: state.active.sortOrder
    }
  });
  console.log(state);
  const { categoryBestsellers = {} } = data || {};
  const currentCategory = categoryBestsellers.current_category || {};
  const parentCategory = categoryBestsellers.parent_category || {};
  const childCategories = categoryBestsellers.child_categories || [];

  const generateUri = (params, data) => {
    let nextUri = "/best-sellers";
    Object.values(params).map((param, index) => {
      if (index < data.level) {
        nextUri += "/" + param;
      }
      return param;
    });
    return nextUri + "/" + data.value;
  };

  const handleRootChange = (value, data) => {
    history.push(`/best-sellers/${value}`);
    dispatch({
      type: "changeRootCategory",
      category: { data, value }
    });
  };

  const handleSubCategoryChange = (value, data) => {
    history.push(generateUri(params, data));
    dispatch({
      type: "changeSubCategory",
      category: { value, data }
    });
  };

  const handleFilterChange = filter => {
    dispatch({
      type: "changeFilter",
      filter
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <CategoryHeader
          cat0={state.cat0}
          cat1={state.cat1}
          cat2={state.cat2}
          cat3={state.cat3}
          active={state.active}
          onRootChange={handleRootChange}
          onSubCategoryChange={handleSubCategoryChange}
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
