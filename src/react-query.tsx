// src/react-query.ts
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const ReactQueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider
   client={queryClient}
   >
   {children}
   </QueryClientProvider>
);
