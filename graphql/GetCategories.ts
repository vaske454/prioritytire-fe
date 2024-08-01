import { gql } from '@apollo/client';

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categoryList {
      id
      name
      product_count
      children {
        id
        name
        product_count
        children {
          id
          name
          product_count
          children {
            id
            name
            product_count
          }
        }
      }
    }
  }
`;
