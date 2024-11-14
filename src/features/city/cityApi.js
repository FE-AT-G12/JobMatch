import { apiSlice } from '../../apis/apiSlice'

export const cityApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCityList: build.query({
      query: (params) => ({
        url: '/city',
        method: 'GET',
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ['City'],
    }),
  }),
})

export const { useGetCityListQuery } = cityApi
