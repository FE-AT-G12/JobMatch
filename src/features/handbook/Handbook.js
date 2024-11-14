import { apiSlice } from '../../apis/apiSlice'

export const handbookApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getHandbookList: build.query({
      query: (params) => ({
        url: '/handbook',
        method: 'GET',
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ['Handbook'],
    }),
    getHandbookDetail: build.query({
      query: (id) => ({
        url: `/handbook/${id}`,
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['Handbook'],
    }),
  }),
})

export const { useGetHandbookListQuery } = handbookApi
