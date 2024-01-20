import { api } from '@/shared/api/base'
import { ILoginArgs } from './auth-queries.type'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ body }: ILoginArgs) => ({
        url: '/auth/login',
        method: 'POST',
        // allow the server to receive the cookies
        credentials: 'include',
        body
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi