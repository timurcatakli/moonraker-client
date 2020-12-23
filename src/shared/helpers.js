import { SORT_ORDER_FIELDS, SORT_BY_FIELDS } from "../shared/constants";

export const generateSlug = name => {
  const nextName = name
    .toLowerCase()
    .replace(/ &amp;|,/g, "")
    .replace(/ /g, "-");
  return nextName;
};

const recursiveTraverse = (list, start = 0) => {
  for (let i of list) {
    console.log(`${start} - ${i.slug}`);
    if (i.children.length > 0) {
      recursiveTraverse(i.children, ++start);
    }
  }
};

export const fetchCategoryTree = (paramsArr, allCategories) => {
  const response = {
    cat0: undefined,
    cat1: undefined,
    cat2: undefined,
    cat3: undefined,
    active: {
      sortBy: SORT_BY_FIELDS[0].key,
      sortOrder: SORT_ORDER_FIELDS[0].key
    }
  };
  console.log("paramsArr", paramsArr);
  const {
    slug1 = undefined,
    slug2 = undefined,
    slug3 = undefined,
    slug4 = undefined
  } = paramsArr;

  if (slug1 !== undefined) {
    const cat0 = allCategories.find(cat => cat.slug === slug1);
    if (cat0 !== undefined) {
      response.cat0 = cat0;
      response.active = { ...response.active, ...cat0 };
    } else {
      return false;
    }
  }

  if (slug2 !== undefined) {
    const cat1 = response.cat0.children.find(cat => cat.slug === slug2);
    if (cat1 !== undefined) {
      response.cat1 = cat1;
      response.active = { ...response.active, ...cat1 };
    } else {
      return false;
    }
  }

  if (slug3 !== undefined) {
    const cat2 = response.cat1.children.find(cat => cat.slug === slug3);
    if (cat2 !== undefined) {
      response.cat2 = cat2;
      response.active = { ...response.active, ...cat2 };
    } else {
      return false;
    }
  }

  if (slug4 !== undefined) {
    const cat3 = response.cat2.children.find(cat => cat.slug === slug4);
    if (cat3 !== undefined) {
      response.cat3 = cat3;
      response.active = { ...response.active, ...cat3 };
    } else {
      return false;
    }
  }
  return response;
};
