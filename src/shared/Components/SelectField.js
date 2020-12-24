import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SelectField = props => {
  const { onChange, data, optionProps, selectProps } = props;
  return (
    <Select
      {...selectProps}
      autoFocus
      onChange={onChange}
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
      {data.map(category => {
        const { slug, name } = category;
        return (
          <Option value={slug} key={slug} {...optionProps}>
            {name}
          </Option>
        );
      })}
    </Select>
  );
};

export default SelectField;
