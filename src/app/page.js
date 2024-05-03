import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 mt-5 bg-slate-800 rounded-lg h-[100vh] flex items-center flex-col">
      <h1 className="p-7 text-center text-5xl font-bold ">Bem vindo ao nosso dashboard completo! 
      <br/>
      <span className="mt-8 text-center text-4xl text-white/60">
      Monitore os usuário e produtos de sua loja com um clique!
      </span>
      </h1>
    </div>
  );
}
