import { baseApi } from "../../api/baseApi";

const commonProgramApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPrograms: builder.query({
      query: () => ({
        url: "/program",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProgramsQuery } = commonProgramApi;
