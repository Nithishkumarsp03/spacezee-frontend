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
    }),
  }),
});

export const {
  useGetLearningMaterialByIdQuery,
  useGetCourseMaterialByIdQuery,
} = userCourseApi;
