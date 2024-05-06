import { addProduct } from "@/lib/actions";

const Page = () => {
  return (
    <div className="flex flex-col">
      <form action={addProduct}>
        <div className="flex gap-10 items-center mt-5">
          <div className="flex flex-col items-center w-[50%] bg-slate-800 rounded-lg p-4 gap-5">
            <input
              name="title"
              type="text"
              placeholder="Título"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <input
              name="price"
              type="text"
              placeholder="Preço"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <input
              name="color"
              type="text"
              placeholder="Cor"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
          </div>
          <div className="flex flex-col items-center w-[50%] bg-slate-800 rounded-lg p-4 gap-5">
            <select
              name="category"
              id=""
              placeholder="Categoria"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            >
              <option value="clothes">Roupas</option>
              <option value="eletronic">Elêtronicos</option>
              <option value="games">Jogos</option>
              <option value="services">Serviços</option>
            </select>
            <input
              name="stock"
              type="text"
              placeholder="Estoque"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
            <input
              name="size"
              type="text"
              placeholder="Tamanho"
              className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            />
          </div>
        </div>
        <div className="bg-slate-800 p-4 mt-5 rounded-lg">
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
            placeholder="Descrição do produto..."
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
