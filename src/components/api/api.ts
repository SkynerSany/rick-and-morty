import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharactersInfo } from './api-interfaces';

interface IGetCharactersProps {
  search: string;
  currentPage: number;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ICharactersInfo, IGetCharactersProps>({
      query: (args) => ({
        url: `/character/`,
        params: {
          page: args.currentPage,
          name: args.search,
        },
      }),
    }),
  }),
});

export const { useGetCharactersQuery } = api;
