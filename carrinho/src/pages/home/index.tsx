import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";

interface ProdutosData {
    id: number;
    titulo: string;
    descricao: string;
    preco: number;
    imagem: string;
}

export function Home() {
    const [produtos, setProdutos] = useState<ProdutosData[]>([]);

    useEffect(() => {
        async function getProdutos() {
            const response = await api.get("/products");
            // setProdutos(response.data);
            setProdutos(
                response.data.map((produto) => ({
                    id: produto.id,
                    titulo: produto.title,
                    descricao: produto.description,
                    preco: produto.price,
                    imagem: produto.cover,
                }))
            );
        }

        getProdutos();
    }, []);

    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-3xl mb-4 mt-10 text-center">
                    Produtos em alta
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {produtos.map((produto) => (
                        <section className="w-full" key={produto.id}>
                            <img
                                className="w-full rounded-lg max-h-70 mb-2"
                                src={produto.imagem}
                                alt={produto.titulo}
                            />
                            <p className="font-medium mt-1 mb-2">
                                {produto.titulo}
                            </p>
                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">
                                    {produto.preco.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </strong>
                                <button className="bg-zinc-900 p-1 rounded">
                                    <BsCartPlus size={20} color="#FFF" />
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
