import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/api/register',
        })
    })
})

export const {
    useGetUserQuery
} = userSlice; 