import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changeUserStatus: builder.mutation({
      query: (userInfo) => ({
        url: "users/change-status",
        method: "PATCH",
        body: userInfo,
      }),
    }),
    delateUser: builder.mutation({
      query: (userInfo) => ({
        url: `users/${userInfo.email}`,
        method: "DELETE",
        body: {
          isDeleted: userInfo.isDeleted,
        },
      }),
    }),
    getUserinfo: builder.query({
      query: (userInfo) => ({
        url: `users/${userInfo.email}`,
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: `users/create-user`,
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useChangeUserStatusMutation,
  useDelateUserMutation,
  useCreateUserMutation,
  useLazyGetUserinfoQuery,
} = adminApi;
