import { SORT_ORDER_FIELDS, SORT_BY_FIELDS } from "../../shared/constants";
import allCategories from "../../shared/categories";

const getCategoryBySlug = (slug, list = allCategories) => {
  let response;
  const traverseList = (str, arr) => {
    for (let cat of arr) {
      if (cat.slug === str) {
        response = cat;
      } else {
        if (Array.isArray(cat.children) && cat.children.length > 0) {
          traverseList(str, cat.children);
        }
      }
    }
  };
  traverseList(slug, list);
  return response;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeRootCategory":
      const cat0 = getCategoryBySlug(action.category.value);
      return {
        cat0,
        cat1: undefined,
        cat2: undefined,
        cat3: undefined,
        active: { ...state.active, ...cat0 }
      };
    case "changeSubCategory":
      console.log(action.category.data.level);
      const selectedCategory = getCategoryBySlug(action.category.value);
      if (action.category.data.level === 1) {
        return {
          ...state,
          cat1: selectedCategory,
          cat2: undefined,
          cat3: undefined,
          active: { ...state.active, ...selectedCategory }
        };
      }
      if (action.category.data.level === 2) {
        return {
          ...state,
          cat2: selectedCategory,
          cat3: undefined,
          active: { ...state.active, ...selectedCategory }
        };
      }
      if (action.category.data.level === 3) {
        return {
          ...state,
          cat3: selectedCategory,
          active: { ...state.active, ...selectedCategory }
        };
      }
      return state;
    case "changeFilter":
      const { filter } = action;
      return {
        ...state,
        active: { ...state.active, ...filter }
      };

    default:
      return state;
  }
};

export default reducer;
