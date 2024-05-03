export default function Home() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="flex flex-col justify-between bg-slate-800 rounded-lg p-8 gap-8 w-[500px] items-center">
        <h1 className="font-bold text-4xl text-center">Login</h1>
        <input type="text" placeholder="Email" className="bg-slate-900 p-4 rounded-lg outline-none w-full" />
        <input type="password" placeholder="Senha" className="bg-slate-900 p-4 rounded-lg outline-none w-full" />
        <button className="p-2 bg-[#5d57c9] rounded-md border-none cursor-pointer hover:bg-[#5d57c9]/60w-full">Entrar</button>
      </div>
    </div>
  );
}
