import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { SidebarItem } from "../types/SidebarItem";

export const sidebarData: SidebarItem[] = [
  {
    title: "Início",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    title: "Suas atividades",
    path: "/activities",
    icon: <FaListUl />,
  },
  {
    title: "Criar time",
    path: "/createTeam",
    icon: <RiPencilFill />,
  },
  {
    title: "Procurar times",
    path: "/searchTeam",
    icon: <AiOutlineTeam />,
  },
  {
    title: "Sua conta",
    path: "/userSettings",
    icon: <MdSettings/>,
  },
  {
    title: "Deslogar",
    path: "/login",
    icon: <IoMdExit/>,
  },
];