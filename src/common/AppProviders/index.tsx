import React, { FC } from "react";

import { TodoProvider } from "src/contexts/Todo";

const AppProviders: FC = ({ children }) => (
  <TodoProvider>{children}</TodoProvider>
);

export default AppProviders;
