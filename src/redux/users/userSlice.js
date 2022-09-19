import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/api/user',
      providesTags: ['User'],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: '/api/register',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: '/api/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    logoutUser: builder.mutation({
      query: (user) => ({
        url: '/api/logout',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery, useCreateUserMutation, useLoginUserMutation, useLogoutUserMutation,
} = userSlice;
