import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    generatePassword: builder.mutation({
      query: (userInfo) => ({
        url: "auth/create-password",
        method: "POST",
        body: userInfo,
      }),
    }),
    resetPassword: builder.mutation({
      query: (userInfo) => ({
        url: "auth/reset-password",
        method: "POST",
        body: {
          email: userInfo.email,
          newPassword: userInfo.newPassword,
          token: userInfo.token,
        },
      }),
    }),
    forgetPassword: builder.mutation({
      query: (userInfo) => ({
        url: "auth/forget-password",
        method: "POST",
        body: userInfo,
      }),
    }),
    changePassword: builder.mutation({
      query: (userInfo) => ({
        url: "auth/change-password",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGeneratePasswordMutation,
  useResetPasswordMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
