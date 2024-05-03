import { FaUser } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex w-full mt-4 gap-4">
      <div className="flex flex-col p-4 gap-6 bg-slate-800 rounded-lg h-96">
        <FaUser className="size-80" />
        <hr />
        <span>Hello</span>
      </div>
      <div className="p-4 bg-slate-800 rounded-lg w-full">
        <form className="flex flex-col gap-8" action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Nome do usuário</label>
            <input
              type="text"
              placeholder="Nome do usuário"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Senha</label>
            <input
              type="text"
              placeholder="Senha"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Celular</label>
            <input
              type="text"
              placeholder="Celular"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Endereço</label>
            <input
              type="text"
              placeholder="Endereço"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Cargo</label>
            <select
              name=""
              id=""
              placeholder="Cargo"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value="">Tipo do cargo</option>
              <option value="admin">Admin</option>
              <option value="client">Cliente</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Está ativo?</label>
            <select
              name=""
              id=""
              placeholder="Ativo?"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value="isActive">Está ativo?</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
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
