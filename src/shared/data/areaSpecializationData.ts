import { BsCalendar2EventFill, BsFillAwardFill, BsGearFill } from "react-icons/bs";
import { BiMicrochip } from "react-icons/bi";
import { MdOutlineAir, MdPhotoCamera } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { HiChip } from "react-icons/hi";
import { FaCube, FaDraftingCompass } from "react-icons/fa";

export const areaSpecializationData = [
  {
    type: "awards",
    value: "Prêmios",
    icon: BsFillAwardFill
  },
  {
    type: "electrical",
    value: "Elétrica",
    icon: HiChip,
  },
  {
    type: "marketing",
    value: "Marketing",
    icon: MdPhotoCamera
  },
  {
    type: "mechanics",
    value: "Mecânica",
    icon: BsGearFill
  },
  {
    type: "pneumatics",
    value: "Pneumática",
    icon: MdOutlineAir
  },
  {
    type: "programming",
    value: "Programação",
    icon: AiFillCode
  },
  {
    type: "project",
    value: "Projeto",
    icon: FaCube
  },
  {
    type: "strategy",
    value: "Estratégia",
    icon: FaDraftingCompass
  },
  {
    type: "workshops",
    value: "Oficinas",
    icon: BsCalendar2EventFill
  },
];

export const findSpecializationValueByType = (type: string) => {
  const target = areaSpecializationData.find(specialization => specialization.type === type)!;

  return target.value;
}