import { Todo } from "../types/todo";
import { api } from "./index";

export const todosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<Todo[], { start: number; limit: number }>({
      query: ({ start, limit }) => `todos?_start=${start}&_limit=${limit}`,
    }),
    createTodo: build.mutation<Todo, Partial<Todo>>({
      query: (newTodo) => ({
        url: "todos",
        method: "POST",
        body: newTodo,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetTodosQuery, useCreateTodoMutation } = todosApi;


//UseCreateTodoMutation ini untuk create itu pake RTK Query lalu di wrapper componentnya jadi csr
// jadi parent ssr tapi child csr
