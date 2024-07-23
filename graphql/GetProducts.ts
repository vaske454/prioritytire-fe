import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products(filter: {}, pageSize: 20) {
      items {
        id
        name
        short_description {
          html
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
    }
  }
`;
