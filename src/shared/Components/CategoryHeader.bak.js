import React from "react";
import styled from "styled-components";
import { Typography, Select, PageHeader, Tag, Button } from "antd";
import {
  ROOT_CATEGORIES,
  SORT_ORDER_FIELDS,
  SORT_BY_FIELDS
} from "../../shared/constants";
import SITE_CONFIG from "../../shared/config";

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
    activeId,
    activeLink,
    activeName,
    activeSortBy,
    activeSortOrder,
    children,
    onFilterChange,
    onRootChange,
    rootId,
    rootLink,
    rootName
  } = props;

  const [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

  const onSortByChange = value => {
    onFilterChange({
      sortBy: value,
      sortOrder: activeSortOrder
    });
  };
  const onSortOrderChange = value => {
    onFilterChange({
      sortBy: activeSortBy,
      sortOrder: value
    });
  };

  return (
    <PageHeader
      tags={<Tag color="blue">{`updated on ${month}/${date}/${year}`}</Tag>}
      title={`Top 50 Best Selling ${activeName} Products`}
    >
      <FormWrapper>
        <RowContainer>
          <div>
            <Text type="secondary">Root Category</Text>
          </div>
          <div>
            <Select
              autoFocus
              onChange={onRootChange}
              defaultValue={rootId}
              optionFilterProp="name"
              showSearch
              style={{ width: 240 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {ROOT_CATEGORIES.map(category => {
                const { id, name, link } = category;
                return (
                  <Option value={id} name={name} link={link} key={id}>
                    {name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </RowContainer>
        <RowContainer>
          <div>
            <Text type="secondary">Sub 1</Text>
          </div>
          <div>
            <Select
              autoFocus
              onChange={onRootChange}
              defaultValue={rootId}
              optionFilterProp="name"
              showSearch
              style={{ width: 240 }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {children.map(category => {
                const { id, name, link } = category;
                return (
                  <Option value={id} name={name} link={link} key={id}>
                    {name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </RowContainer>

        <RowContainer>
          <div>
            <Text type="secondary">Sort Field</Text>
          </div>
          <div>
            <Select
              onChange={onSortByChange}
              value={activeSortBy}
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
              value={activeSortOrder}
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
