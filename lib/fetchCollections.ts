import hygraphClient from './hygraphClient';
import { GET_HYGRAPH_COLLECTIONS_QUERY } from '@/graphql/GetHygraphCollections';
import { Collection } from '@/types/Collection';

export const fetchCollections = async (): Promise<Collection[]> => {
  try {
    const { data } = await hygraphClient.query({
      query: GET_HYGRAPH_COLLECTIONS_QUERY,
      fetchPolicy: 'no-cache',
    });
    return data.collections;
  } catch (error) {
    throw new Error('Failed to connect to the database');
  }
};
