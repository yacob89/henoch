import React, { createContext, useEffect, useState, useContext } from "react";
import { API } from "aws-amplify";
import * as queries from "src/graphql/queries";

import { TypeNote } from "src/types/TypeNote";

interface ContextConfiguration {
  items: TypeNote[];
  refetch: () => Promise<void>;
}

export const TodoContext = createContext<ContextConfiguration | undefined>(
  undefined
);

export const TodoProvider: React.FC<{}> = ({ children }) => {
  const [todo, setTodo] = useState<TypeNote[]>([]);

  const refetch = async (): Promise<void> => {
    // TODO: improve GraphQL result typing
    const result: any = await (API.graphql({
      query: queries.listTodos,
    }) as Promise<TypeNote[]>);
    console.log("hasil: ", result.data.listTodos.items);
    result && setTodo(result.data.listTodos.items);
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoContext.Provider value={{ items: todo, refetch }}>
      {todo && children}
    </TodoContext.Provider>
  );
};

export const useContextTodo = (): ContextConfiguration => {
  const value = useContext(TodoContext);
  if (value === undefined) {
    throw new Error("useContextTodo must be used within a ConfigProvider");
  }
  return value;
};
