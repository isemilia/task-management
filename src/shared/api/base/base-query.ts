import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RootState} from '@/app/store';
import {Cookies} from 'react-cookie';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tasks-api-u2g6.onrender.com',
    // baseUrl: 'http://localhost:4000',

    // allow the server to receive the cookies
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    prepareHeaders: (headers, api) => {
      const token = new Cookies().get('token');

      if (token) {
        headers.set('Authorization', token);
      }

      return headers
    }
  }),
  tagTypes: ['me', 'tasks'],
  endpoints: () => ({}),
})