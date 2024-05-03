import { CgProfile } from "react-icons/cg";

const Card = () => {
  return (
    <div className="bg-slate-800 p-5 w-full my-5 rounded-lg flex flex-col gap-3">
      <div className="flex items-center gap-2 font-semibold">
        <CgProfile />
        <h1 className="text-lg">Total users</h1>
      </div>
      <span className="font-bold text-3xl ml-6">10.928</span>
      <p className="text-slate-100/70 ml-6"><span className="text-green-500 font-bold">12%</span> more than last week</p>
    </div>
  );
};

export default Card;
