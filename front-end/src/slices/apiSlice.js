import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Order", "Product"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
