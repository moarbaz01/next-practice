import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: string | number;
  name: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Get Users
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: (result: any) =>
        result
          ? [
              ...result.map(({ id }: { id: number | string }) => ({
                type: "User",
                id,
              })),
              { type: "User", id: "LIST" }, // Tag for the entire list
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    // Get User By Id
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
    }),

    // Edit User By Id
    editUserById: builder.mutation<User, { id: string | number; name: string }>(
      {
        query: ({ id, name }) => ({
          url: `/users/${id}`,
          method: "PUT",
          body: { name },
        }),
        invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
      }
    ),

    // Add User
    addUser: builder.mutation<User, User>({
      query: ({ id, name }) => ({
        url: "/users",
        method: "POST",
        body: { id, name },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    // Delete User By Id
    deleteUserById: builder.mutation<void, { id: string | number }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useEditUserByIdMutation,
  useDeleteUserByIdMutation,
  useAddUserMutation,
} = usersApi;
