import { api } from '@/shared/api/base'
import { ILoginArgs, ISignupArgs } from './auth-queries.type'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ body }: ILoginArgs) => ({
        url: '/auth/login',
        method: 'POST',
        body
      }),
      invalidatesTags: ['me']
    }),
    getMe: build.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET'
      }),
      providesTags: ['me']
    }),
    signup: build.mutation({
      query: ({ body }: ISignupArgs) => ({
        url: '/auth/signup',
        method: 'POST',
        body
      }),
      invalidatesTags: ['me']
    })
  }),
})

export const { useLoginMutation, useGetMeQuery, useSignupMutation } = authApi