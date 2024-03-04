import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder: any) => ({
        login: builder.mutation({
            query: (loginInfo: any) => ({
                url: '/auth/login',
                method: 'POST',
                body: loginInfo,
            }),
        }),
        register: builder.mutation({
            query: (userInfo: any) => ({
                url: '/users/register',
                method: 'POST',
                body: userInfo,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;