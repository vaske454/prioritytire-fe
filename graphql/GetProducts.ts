import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
  category1: category(id: 23) {
    products(pageSize: 5) {
      items {
        id
        name
        sku
        short_description {
          html
        }
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
        stock_status
        categories {
          name
        }
        country_of_manufacture
        activity
        style_general
        material
        sleeve
        size
        collar
        pattern
        climate
        color
        eco_collection
        performance_fabric
        erin_recommends
        new
        sale
        ... on PhysicalProductInterface {
          weight
        }
      }
    }
  }
  category2: category(id: 14) {
    products(pageSize: 5) {
      items {
        id
        name
        sku
        short_description {
          html
        }
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
        stock_status
        categories {
          name
        }
        country_of_manufacture
        activity
        style_general
        material
        sleeve
        size
        collar
        pattern
        climate
        color
        eco_collection
        performance_fabric
        erin_recommends
        new
        sale
        ... on PhysicalProductInterface {
          weight
        }
      }
    }
  }
  category3: category(id: 4) {
    products(pageSize: 5) {
      items {
        id
        name
        sku
        short_description {
          html
        }
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
        stock_status
        categories {
          name
        }
        country_of_manufacture
        activity
        style_general
        material
        sleeve
        size
        collar
        pattern
        climate
        color
        eco_collection
        performance_fabric
        erin_recommends
        new
        sale
        ... on PhysicalProductInterface {
          weight
        }
      }
    }
  }
}
`;
