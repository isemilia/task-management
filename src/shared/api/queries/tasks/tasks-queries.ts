import { api } from '@/shared/api/base';

const tasksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMyTasks: build.query({
      query: () => ({
        url: '/tasks',
        method: 'GET'
      })
    })
  })
})

export const { useGetMyTasksQuery } = tasksApi