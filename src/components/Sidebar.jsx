import Image from "next/image";
import MenuLink from "./MenuLink";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
  import { CgProfile } from "react-icons/cg";
  
const menuItems = [
    {
      title: "Páginas",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Usuários",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Produtos",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transações",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Análises",
      list: [
        {
          title: "Receitas",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Relatórios",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Times",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "Usuário",
      list: [
        {
          title: "Configurações",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Ajuda",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

const Sidebar = () => {
    return(
        <div className="sticky top-10">
            <div className="flex items-center gap-5 mb-5">
                <CgProfile className="size-12"/>
                <div className="flex flex-col">
                    <span className="font-semibold">Giovani</span>
                    <span className="text-sm text-slate-300">Administrator</span>
                </div>
            </div>
            <ul className="list-none">
            {menuItems.map(cat=>(
                <li key={cat.title}>
                    <span className="text-slate-300 font-bold text-sm my-2.5">{cat.title}</span>
                    {cat.list.map(item => (
                        <MenuLink item={item} key={item.title}/>
                    ))}
                </li>
            ))}
            </ul>
            <button className="p-4 my-1.5 flex items-center gap-2 cursor-pointer rounded-xl bg-none w-full border-none text-slate-100 hover:bg-slate-700/20">
              <MdLogout />
              Sair
            </button>
        </div>
    )
}

export default Sidebar