const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10 items-center mt-5">
        <div className="flex flex-col items-center w-[50%] bg-slate-800 rounded-lg p-4 gap-5">
          <input
            type="text"
            placeholder="Título"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
          />
          <input
            type="text"
            placeholder="Preço"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
          />
          <input
            type="text"
            placeholder="Cor"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
          />
        </div>
        <div className="flex flex-col items-center w-[50%] bg-slate-800 rounded-lg p-4 gap-5">
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
          <input
            type="text"
            placeholder="Estoque"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
          />
          <input
            type="text"
            placeholder="Tamanho"
            className="bg-slate-900 p-4 rounded-lg outline-none w-full"
          />
        </div>
      </div>
      <div className="bg-slate-800 p-4 mt-5 rounded-lg">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="bg-slate-900 p-4 rounded-lg outline-none w-full"
          placeholder="Descrição do produto..."
        ></textarea>
      <button className="p-2 mt-6 bg-[#5d57c9] rounded-md border-none cursor-pointer hover:bg-[#5d57c9]/60 m-auto w-full">Adicionar</button>
      </div>

    </div>
  );
};

export default Page;
