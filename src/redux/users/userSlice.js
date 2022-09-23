/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const user = Cookies.get('user');
const token = Cookies.get('jwt');

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER,
    prepareHeaders: (headers) => {
      headers.set('Authorization', token);
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
      query: () => ({
        url: '/api/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    getProfiles: builder.query({
      query: () => '/people/',
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ['Profile'],
    }),
    getProfileDetail: builder.query({
      query: () => `/people/detail/${user}/`,
      providesTags: ['Profile'],
    }),
    createProfile: builder.mutation({
      query: (profile) => ({
        url: '/people/create',
        method: 'POST',
        body: profile,
      }),
      invalidatesTags: ['Profile'],
    }),
    updateProfile: builder.mutation({
      query: ({ user, formData }) => ({
        url: `/people/update/${user}/`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
    deleteProfile: builder.mutation({
      query: ({ id, patch }) => ({
        url: `/people/delete/${id}/`,
        method: 'DELETE',
        body: patch,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetProfilesQuery,
  useGetProfileDetailQuery,
  useCreateProfileMutation,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
} = userSlice;
