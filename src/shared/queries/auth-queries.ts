import { api } from '@/shared/queries'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.query({
      query: () => 'test',
    }),
  }),
})

export const { useLoginQuery } = authApi