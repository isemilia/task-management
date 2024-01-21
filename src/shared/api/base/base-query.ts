import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// TODO: add tags and invalidate on token change

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    // allow the server to receive the cookies
    credentials: 'include'
  }),
  endpoints: () => ({}),
})