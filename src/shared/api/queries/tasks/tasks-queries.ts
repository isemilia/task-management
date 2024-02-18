import { api } from '@/shared/api/base';
import {ICreateTaskBody} from '@/shared/api/queries/tasks/resources/tasks-queries.model.ts';

const tasksApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMyTasks: build.query({
      query: () => ({
        url: '/tasks',
        method: 'GET'
      }),
      providesTags: ['tasks']
    }),
    createTask: build.mutation({
      query: ({title, description, status, deadline}: ICreateTaskBody) => ({
        url: '/tasks',
        method: 'POST',
        body: {
          title,
          description,
          status,
          deadline
        }
      }),
      invalidatesTags: ['tasks']
    })
  })
})

export const { useGetMyTasksQuery, useCreateTaskMutation } = tasksApi