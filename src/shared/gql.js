import { gql } from "@apollo/client";

export const CATEGORY_BESTSELLERS = gql`
  query($url: String, $sortBy: String, $sortOrder: String) {
    categoryBestsellers(url: $url, sortBy: $sortBy, sortOrder: $sortOrder) {
      current_category {
        id
        name
        link
      }
      child_categories {
        id
        name
        link
      }
      parent_category {
        id
        name
        link
      }
      bestsellers {
        asin
        image
        link
        position
        price_lower {
          currency
          raw
          symbol
          value
        }
        price_upper {
          currency
          raw
          symbol
          value
        }
        price {
          currency
          raw
          symbol
          value
        }
        rank
        rating
        ratings_total
        title
      }
    }
  }
`;
