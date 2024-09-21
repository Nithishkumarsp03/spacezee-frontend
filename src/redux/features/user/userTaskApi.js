import { baseApi } from "../../api/baseApi";

const userCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTaskContent: builder.query({
      query: (data) => {
        const { courseId, contentId } = data;
        return {
          url: `/task/content/${courseId}`,
          method: "POST",
          body: { courseContentId: contentId },
        };
      },
    }),
    completeTask: builder.mutation({
      query: (taskId, id) => ({
        url: `/users/task-update`,
        method: "PATCH",
        body: { completedTask: taskId },
      }),
      invalidatesTags: [{ type: "CourseMaterial" }],
    }),
    getTaskJwt: builder.mutation({
      query: (payload) => ({
        url: `/jwt/task`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetTaskContentQuery,
  useCompleteTaskMutation,
  useGetTaskJwtMutation,
} = userCourseApi;
