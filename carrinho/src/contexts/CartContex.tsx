import { Children, createContext, ReactNode, useState } from "react";

interface CarrinhoContextData {
    Carrinho: CarrinhoData[];
    CarrinhoQuantidade: number;
}

interface CarrinhoData {
    id: number;
    titulo: string;
    descricao: string;
    preco: number;
    imagem: string;
    quantidade: number;
    total: number;
}

interface CarrinhoProviderProps {
    children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextData);

function CarrinhoProvider({ children }: CarrinhoProviderProps) {
    const [Carrinho, setCarrinho] = useState<CarrinhoData[]>([]);

    return (
        <CarrinhoContext.Provider
            value={{ Carrinho, CarrinhoQuantidade: Carrinho.length }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export default CarrinhoProvider;
