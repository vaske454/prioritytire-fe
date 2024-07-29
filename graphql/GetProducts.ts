import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
  category1: category(id: "23") {
    products(pageSize: 5) {
      items {
        id
        name
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        image {
          url
        }
        url_key
      }
    }
  }
  category2: category(id: "14") {
    products(pageSize: 5) {
      items {
        id
        name
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        image {
          url
        }
        url_key
      }
    }
  }
  category3: category(id: "4") {
    products(pageSize: 5) {
      items {
        id
        name
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        image {
          url
        }
        url_key
      }
    }
  }
}

`;
