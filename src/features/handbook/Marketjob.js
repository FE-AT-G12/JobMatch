import { apiSlice } from '../../apis/apiSlice'

export const marketjobApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMarketjobList: build.query({
      query: (params) => ({
        url: '/marketjob',
        method: 'GET',
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ['Marketjob'],
    }),
    getMarketjobDetail: build.query({
      query: (id) => ({
        url: `/marketjob/${id}`,
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['Marketjob'],
    }),
  }),
})

export const { useGetMarketjobListQuery } = marketjobApi
