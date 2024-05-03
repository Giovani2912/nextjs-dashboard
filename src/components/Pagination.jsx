"use client";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { MdRampRight } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 1;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1); replace(`${pathname}?${params}`)
  }

  return (
    <div className="p-2 flex justify-between mt-4">
      <button
        className="flex items-center rounded-md gap-2 p-2 cursor-pointer disabled:cursor-not-allowed ease-in duration-300 hover:bg-slate-200 hover:text-slate-900"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        {" "}
        <CgArrowLeft /> Anterior
      </button>
      <button
        className="flex items-center rounded-md gap-2 p-2 cursor-pointer disabled:cursor-not-allowed ease-in duration-300 hover:bg-slate-200 hover:text-slate-900"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Próximo <CgArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
