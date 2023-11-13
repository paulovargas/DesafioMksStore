import { createContext, useContext, useState, ReactNode } from 'react';

type Produto = {
  name: string;
  brand: string;
  description: string;
  phone: string;
  price: string;
  /* 
  "id": 5,
      "name": "Apple Watch Series 7",
      "brand": "Apple",
      "description": "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
      "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
      "price": "3200.00",
      "createdAt": "2023-10-30T16:25:01.093Z",
      "updatedAt": "2023-10-30T16:25:01.093Z" */
};

type ProdutoContextType = {
  produtos: Produto[];
  setProdutos: (produtos: Produto[]) => void;
};

const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

type ProdutoProviderProps = {
  children: ReactNode;
};

export function ProdutoProvider({ children }: ProdutoProviderProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  return (
    <ProdutoContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutoContext.Provider>
  );
}

export function useProduto() {
  const context = useContext(ProdutoContext);
  return context;
}
