import React from "react";
import styled from "styled-components";
import { SORT_ORDER_FIELDS, SORT_BY_FIELDS } from "../../shared/constants";
import { Select } from "antd";

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
`;

const { Option } = Select;
const Filter = () => {
  return (
    <FilterWrapper>
      <div>
        <h4>SORT BY</h4>
      </div>
      <div>
        <Select
          defaultValue={SORT_BY_FIELDS[0].key}
          style={{ width: 200 }}
          onChange={() => {}}
          size="large"
        >
          {SORT_BY_FIELDS.map(field => {
            return <Option value={field.key}>{field.label}</Option>;
          })}
        </Select>
      </div>
      <div>
        <h4>SORT DIRECTION</h4>
      </div>
      <div>
        <Select
          defaultValue={SORT_ORDER_FIELDS[0].key}
          style={{ width: 200 }}
          onChange={() => {}}
          size="large"
        >
          {SORT_ORDER_FIELDS.map(field => {
            return <Option value={field.key}>{field.label}</Option>;
          })}
        </Select>
      </div>
    </FilterWrapper>
  );
};

export default Filter;
