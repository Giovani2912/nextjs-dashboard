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
            <label htmlFor="">Título</label>
            <input
              type="text"
              placeholder="Título"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Preço</label>
            <input
              type="text"
              placeholder="Preço"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Cor</label>
            <input
              type="text"
              placeholder="Cor"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Categoria</label>
            <select
              name=""
              id=""
              placeholder="Categoria"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value="clothes">Roupas</option>
              <option value="eletronic">Elêtronicos</option>
              <option value="games">Jogos</option>
              <option value="services">Serviços</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Estoque</label>
            <input
              type="text"
              placeholder="Estoque"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Tamanho</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Tamanho"
              className="bg-slate-900 p-4 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Descrição</label>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
              placeholder="Descrição do produto..."
            ></textarea>
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
