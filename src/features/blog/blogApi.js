import { apiSlice } from '../../apis/apiSlice'

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBlogList: build.query({
      query: (params) => ({
        url: '/blog',
        method: 'GET',
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ['Blog'],
    }),
    createBlog: build.mutation({
      query: (data) => ({
        url: '/blog',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['Blog'],
    }),
    getBlogDetail: build.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: 'GET',
      }),
      transformResponse: (res) => res,
      providesTags: ['Blog'],
    }),
    updateBlog: build.mutation({
      query: ({ data, id }) => ({
        url: `/blog/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['Blog'],
    }),
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (res) => res,
      invalidatesTags: ['Blog'],
    }),
  }),
})

export const {
  useGetBlogListQuery,
  useCreateBlogMutation,
  useGetBlogDetailQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi
