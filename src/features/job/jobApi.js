import { createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../../apis/apiSlice'

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getJobList: build.query({
      query: (params) => ({
        url: '/job',
        method: 'GET',
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ['Job'],
    }),
    getJobListByHirerId: build.query({
      query: (hirerId) => ({
        url: `/job?hirerId=${hirerId}`,
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['Job'],
    }),
    createJob: build.mutation({
      query: (data) => ({
        url: '/job',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['Job'],
    }),
    getJobDetail: build.query({
      query: (id) => ({
        url: `/job/${id}`,
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['Job'],
    }),
    updateJob: build.mutation({
      query: ({ data, id }) => ({
        url: `/job/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['Job'],
    }),
    deleteJob: build.mutation({
      query: (id) => ({
        url: `/job/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['Job'],
    }),
  }),
})




export const {
  useGetJobListQuery,
  useCreateJobMutation,
  useGetJobDetailQuery,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useGetJobListByHirerIdQuery
} = jobApi
