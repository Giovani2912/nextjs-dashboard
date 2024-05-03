import { cn } from "@/lib/utils";
import { CgProfile } from "react-icons/cg";

const Transactions = () => {

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-[#f7cb7375]"; 
      case "done":
        return "bg-[#afd6ee75]"; 
      case "cancelled":
        return "bg-[#f7737375]"; 
      default:
        return "";
    }
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h2 className="mb-4 font-extralight text-2xl">Últimas Transações</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Nome</th>
            <th>Status</th>
            <th>Data</th>
            <th>Qauntidade</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, i) => {
            return (
              <tr key={i}>
                <td className="pt-4">
                  <div className="flex items-center gap-2">
                    <CgProfile className="size-8" />
                    John Doe
                  </div>
                </td>
                <td>
                  <span
                    className={cn(
                      "mt-4 rounded-md p-1 text-white ",
                      getStatusColor("done")
                    )}
                  >
                    Done
                  </span>
                </td>
                <td>15/04/2024</td>
                <td>R$ 499</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
