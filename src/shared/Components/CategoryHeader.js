import React from "react";
import styled from "styled-components";
import { Typography, Select, PageHeader, Tag, Button } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import ALL_CATEGORIES from "../../shared/categories";
import { SORT_ORDER_FIELDS, SORT_BY_FIELDS } from "../../shared/constants";

import SITE_CONFIG from "../../shared/config";
import { SelectField } from "../../shared/Components";
const { Text } = Typography;
const { Option } = Select;

const FormWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: white;
  padding: 12px;
  border-radius: ${SITE_CONFIG.borderRadius};
`;

const CategoryHeader = props => {
  const {
    cat0,
    cat1,
    cat2,
    cat3,
    active,
    onRootChange,
    onSubCategoryChange,
    onFilterChange
  } = props;

  const onSortByChange = value => {
    onFilterChange({
      sortBy: value,
      sortOrder: active.sortOrder
    });
  };
  const onSortOrderChange = value => {
    onFilterChange({
      sortBy: active.sortBy,
      sortOrder: value
    });
  };

  const [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  return (
    <PageHeader
      tags={<Tag color="blue">{`updated on ${month}/${date}/${year}`}</Tag>}
      title={`Top 50 Best Selling ${active.name} Products`}
    >
      <FormWrapper>
        <RowContainer>
          <div>
            <SelectField
              onChange={onRootChange}
              selectProps={{
                placeholder: "Pick a category...",
                value: cat0.slug
              }}
              data={ALL_CATEGORIES}
            />
          </div>
          {cat0 !== undefined &&
            Array.isArray(cat0.children) &&
            cat0.children.length > 0 && (
              <div>
                <DoubleRightOutlined />
              </div>
            )}
          <div>
            {/* Select */}
            {cat0 !== undefined &&
              Array.isArray(cat0.children) &&
              cat0.children.length > 0 && (
                <SelectField
                  onChange={onSubCategoryChange}
                  // value={cat1?.slug || ""}
                  data={cat0.children}
                  optionProps={{ level: 1 }}
                  selectProps={{
                    placeholder: "Pick a category...",
                    value: cat1?.slug || null
                  }}
                />
              )}
            {/* Select */}
          </div>
          {cat1 !== undefined &&
            Array.isArray(cat1.children) &&
            cat1.children.length > 0 && (
              <div>
                <DoubleRightOutlined />
              </div>
            )}
          <div>
            {/* Select */}
            {cat1 !== undefined &&
              Array.isArray(cat1.children) &&
              cat1.children.length > 0 && (
                <SelectField
                  onChange={onSubCategoryChange}
                  // value={cat1?.slug || ""}
                  data={cat1.children}
                  optionProps={{ level: 2 }}
                  selectProps={{
                    placeholder: "Pick a category...",
                    value: cat2?.slug || null
                  }}
                />
              )}
            {/* Select */}
          </div>
        </RowContainer>
        <RowContainer>
          <div>
            <Text type="secondary">Sort Field</Text>
          </div>
          <div>
            <Select
              onChange={onSortByChange}
              value={active.sortBy}
              style={{ width: 200 }}
            >
              {SORT_BY_FIELDS.map(field => {
                return (
                  <Option key={field.key} value={field.key}>
                    {field.label}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div>
            <Text type="secondary">Sort Order</Text>
          </div>
          <div>
            <Select
              onChange={onSortOrderChange}
              value={active.sortOrder}
              style={{ width: 200 }}
            >
              {SORT_ORDER_FIELDS.map(order => {
                return (
                  <Option key={order.key} value={order.key}>
                    {order.label}
                  </Option>
                );
              })}
            </Select>
          </div>
        </RowContainer>
      </FormWrapper>
    </PageHeader>
  );
};

export default CategoryHeader;
