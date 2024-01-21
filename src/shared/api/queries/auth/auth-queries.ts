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
    }),
    getMe: build.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET'
      })
    }),
    signup: build.mutation({
      query: ({ body }: ISignupArgs) => ({
        url: '/auth/signup',
        method: 'POST',
        body
      })
    })
  }),
})

export const { useLoginMutation, useGetMeQuery, useSignupMutation } = authApi