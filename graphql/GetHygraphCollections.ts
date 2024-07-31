import { gql } from '@apollo/client';

export const GET_HYGRAPH_COLLECTIONS_QUERY = gql`
  query GetHygraphCollections {
  collections(where: { id_in: ["clz9wria00n9h07kadprvrh2b", "clz9wn7r00m1407kawg4dgic9", "clz9wl5qu0ldi07lc1faozo2w", "clz9wjh1e0kwn07lcj9sy7wlp"] }) {
    id
    name
    description
    image {
      url
    }
  }
}
`;
