import { baseApi } from "../../api/baseApi";

const userCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLearningMaterialById: builder.query({
      query: (id) => ({
        url: `/material/${id}`,
        method: "GET",
      }),
    }),
    getCourseMaterialById: builder.query({
      query: (id) => ({
        url: `/task/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "CourseMaterial", id }],
    }),

    inputJwt: builder.mutation({
      query: (jwt) => ({
        url: "/jwt",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { token: jwt },
      }),
    }),
  }),
});

export const {
  useGetLearningMaterialByIdQuery,
  useGetCourseMaterialByIdQuery,
  useInputJwtMutation,
} = userCourseApi;
