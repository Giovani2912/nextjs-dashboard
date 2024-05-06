import { addUser } from "@/lib/actions";

const Page = () => {
  return (
    <div className="flex flex-col">
      <form action={addUser}>
        <div className="flex gap-10 items-center mt-5">
          <div className="flex flex-col items-center w-[50%] bg-slate-800 rounded-lg p-4 gap-5">
            <input
              name="username"
              type="text"
              placeholder="Nome do usuário"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <input
              name="password"
              type="password"
              placeholder="Senha"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <select
              name="isAdmin"
              id=""
              placeholder="Cargo"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value="">É Admin?</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
          <div className="flex flex-col items-center w-[50%] bg-slate-800 rounded-lg p-4 gap-5">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Celular"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <select
              name="isActive"
              id=""
              placeholder="Ativo?"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value="isActive">Está ativo?</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>
        </div>
        <div className="bg-slate-800 p-4 mt-5 rounded-lg">
          <textarea
            name="address"
            id=""
            cols="30"
            rows="10"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            placeholder="Endereço..."
          ></textarea>
          <button className="p-2 mt-6 bg-[#5d57c9] rounded-md border-none cursor-pointer hover:bg-[#5d57c9]/60 m-auto w-full">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
