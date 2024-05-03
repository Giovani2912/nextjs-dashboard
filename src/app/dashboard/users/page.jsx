import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const Page = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const {count, users} = await fetchUsers(q, page);

  return (
    <div className="mt-5 bg-slate-800 p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder="Busque por um usuário..." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-[#5d57c9] rounded-md border-none cursor-pointer hover:bg-[#5d57c9]/60">
            Adicionar usuário
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Criado em</td>
            <td>Cargo</td>
            <td>Status</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="pt-4">
                <div className="flex items-center gap-2">
                  {user.img ?  <Image src={user.img} width={40} height={40} alt="imagem do usuário" /> : <CgProfile className="size-8" />}
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Cliente"}</td>
              <td>{user.isActive ? "Ativo" : "Desativado"}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/users/${user.id}`}>
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
