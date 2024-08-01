import apolloClient from './apolloClient';
import { GET_CATEGORIES_QUERY } from '@/graphql/GetCategories';
import { MenuItem } from '@/types/MenuItem';

export const fetchCategories = async (): Promise<MenuItem[]> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_CATEGORIES_QUERY,
      fetchPolicy: 'no-cache',
    });
    return data.categoryList;
  } catch (error) {
    throw new Error("Failed to connect to the database");
  }
}