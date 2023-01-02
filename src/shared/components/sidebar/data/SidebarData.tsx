import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { SidebarItem } from "../types/SidebarItem";

export const sidebarData: SidebarItem[] = [
  {
    title: "Início",
    path: "/",
    icon: <AiOutlineHome />,
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
  }
];