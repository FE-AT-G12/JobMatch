import { apiSlice } from "../../apis/apiSlice";

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCompanyList: build.query({
      query: (params) => ({
        url: "/company",
        method: "GET",
        params,
      }),
      transformResponse: (res) => res,
      providesTags: ["Company"],
    }),
    createCompany: build.mutation({
      query: (data) => ({
        url: "/company",
        method: "POST",
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ["Company"],
    }),
    getCompanyDetail: build.query({
      query: (id) => ({
        url: `/company/${id}`,
        method: "GET",
      }),
      transformResponse: (res) => res,
      providesTags: ["Company"],
    }),
    updateCompany: build.mutation({
      query: ({ data, id }) => ({
        url: `/company/${id}`,
        method: "PUT",
        body: data,
      }),
      transformResponse: (res) => res,
      invalidatesTags: ["Company"],
    }),
    deleteCompany: build.mutation({
      query: (id) => ({
        url: `/company/${id}`,
        method: "DELETE",
      }),
      transformResponse: (res) => res,
      invalidatesTags: ["Company"],
    }),
  }),
});

export const {
  useGetCompanyListQuery,
  useCreateCompanyMutation,
  useGetCompanyDetailQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
