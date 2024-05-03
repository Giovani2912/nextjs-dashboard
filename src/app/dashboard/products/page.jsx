import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Link from "next/link";
import { FaShirt } from "react-icons/fa6";
import { searchParams } from "next/navigation";
import { fetchProducts } from "@/lib/data";

const Page = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(q, page);
  return (
    <div className="mt-5 bg-slate-800 p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder="Busque por um produto..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 bg-[#5d57c9] rounded-md border-none cursor-pointer hover:bg-[#5d57c9]/60">
            Adicionar produto
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td>Título</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Criado em</td>
            <td>Estoque</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="pt-4">
                <div className="flex items-center gap-2">
                  <FaShirt className="size-8" />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().splice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="py-1 px-2 rounded-md border-none cursor-pointer bg-teal-600 hover:bg-teal-600/50">
                      Ver
                    </button>
                  </Link>
                  <button className="py-1 px-2 rounded-md border-none cursor-pointer bg-red-600 hover:bg-red-600/50">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default Page;
