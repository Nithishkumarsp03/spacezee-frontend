import { baseApi } from "../../api/baseApi";

const commonProgramApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPrograms: builder.query({
      query: (info) => ({
        url: "/program",
        method: "POST",
        body: info ? { info } : {},
      }),
    }),
  }),
});

export const { useGetAllProgramsQuery } = commonProgramApi;
