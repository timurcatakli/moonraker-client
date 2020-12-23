import React from "react";
import styled from "styled-components";
import { Row, Col, Select, PageHeader, Tag } from "antd";
import { useMediaQuery } from "react-responsive";
import ALL_CATEGORIES from "../../shared/categories";
import { SORT_ORDER_FIELDS, SORT_BY_FIELDS } from "../../shared/constants";
import SITE_CONFIG from "../../shared/config";
import { SelectField } from "../../shared/Components";

const { Option } = Select;
const RowContainer = styled.div`
  display: grid;
  align-items: flex-start;
  gap: 12px;
  background-color: white;
  padding: 12px;
  border-radius: ${SITE_CONFIG.borderRadius};
  flex-wrap: wrap;
`;

const CategoryHeader = props => {
  const {
    cat0,
    cat1,
    cat2,
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
  const isLayoutA = useMediaQuery({ maxWidth: 904 });
  const isLayoutB = useMediaQuery({ minWidth: 905, maxWidth: 1350 });
  const catColSpan = isLayoutA ? 24 : null;
  const gridTemplateColumns = isLayoutB ? "1fr" : "2fr 1fr";
  const filterJustify = isLayoutB ? "start" : "end";
  const rowGutter = isLayoutA ? [10, 10] : [10, 0];
  return (
    <PageHeader
      tags={<Tag color="blue">{`updated on ${month}/${date}/${year}`}</Tag>}
      title={`Top 50 Best Selling ${active.name} Products`}
    >
      <RowContainer style={{ gridTemplateColumns }}>
        <div>
          {/* --------------- */}
          <Row gutter={rowGutter} align="middle" justify="start">
            <Col span={catColSpan}>
              <div style={{ width: "80px" }}>Categories</div>
            </Col>
            <Col span={catColSpan}>
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
            </Col>
            <Col span={catColSpan}>
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
            </Col>
            <Col span={catColSpan}>
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
            </Col>
          </Row>
          {/* --------------- */}
        </div>
        <div>
          {/* --------------- */}
          <Row gutter={rowGutter} align="middle" justify={filterJustify}>
            <Col span={catColSpan}>
              <div style={{ width: "80px" }}>Sort By</div>
            </Col>
            <Col span={catColSpan}>
              <Select
                onChange={onSortByChange}
                value={active.sortBy}
                style={{ width: 120 }}
              >
                {SORT_BY_FIELDS.map(field => {
                  return (
                    <Option key={field.key} value={field.key}>
                      {field.label}
                    </Option>
                  );
                })}
              </Select>
            </Col>
            <Col span={catColSpan}>
              <Select
                onChange={onSortOrderChange}
                value={active.sortOrder}
                style={{ width: 120 }}
              >
                {SORT_ORDER_FIELDS.map(order => {
                  return (
                    <Option key={order.key} value={order.key}>
                      {order.label}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          </Row>
          {/* --------------- */}
        </div>
      </RowContainer>
    </PageHeader>
  );
};

export default CategoryHeader;
