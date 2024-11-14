import { apiSlice } from '../../apis/apiSlice'

export const userApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUserList: build.query({
      query: (params) => ({
        url: '/user',
        method: 'GET',
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ['User'],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: '/user',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['User'],
    }),
    getUserDetail: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['UserDetail'],
    }),
    updateUser: build.mutation({
      query: ({ data, id }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body: { data, id },
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['User'],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserListQuery,
  useCreateUserMutation,
  useGetUserDetailQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi
