import { updateUser } from "../../../../lib/actions";
import { fetchUser } from "../../../../lib/data";
import { FaUser } from "react-icons/fa";

const Page = async ({ params }) => {
  
  const {id} = params;
  const user = await fetchUser(id);

  return (
    <div className="flex w-full mt-4 gap-4">
      <div className="flex flex-col p-4 gap-6 bg-slate-800 rounded-lg h-96">
        <FaUser className="size-80" />
        <hr />
        <span>Olá ""</span>
      </div>
      <div className="p-4 bg-slate-800 rounded-lg w-full">
        <form className="flex flex-col gap-8" action={updateUser}>
          <input type="hidden" name="id" value={user.id} />
          <div className="flex flex-col gap-2">
            <label htmlFor="">Nome do usuário</label>
            <input
            name="username"
              type="text"
              placeholder={user.username}
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
            name="email"

              type="text"
              placeholder={user.email}
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="*********"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Celular</label>
            <input
            name="phone"

              type="text"
              placeholder={user.phone}
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Endereço</label>
            <input
            name="address"

              type="text"
              placeholder={user.address}
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Cargo</label>
            <select
              name="isAdmin" id="isAdmin"
              placeholder={user.isAdmin}
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value={true} selected={user.isAdmin}>Sim</option>
            <option value={false} selected={!user.isAdmin}>Não</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Está ativo?</label>
            <select
              name="isActive" id="isActive"
              placeholder={user.isActive}
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value={true} selected={user.isActive}>Sim</option>
            <option value={false} selected={!user.isActive}>Não</option>
            </select>
          </div>
          <button className="p-2 mt-6 bg-[#5d57c9] rounded-md border-none cursor-pointer hover:bg-[#5d57c9]/60">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
