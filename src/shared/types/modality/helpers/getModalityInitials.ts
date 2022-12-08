import { Modality } from "../Modality";

export const getModalityInitials = (modality: Modality): string => {
  return modality as unknown as string;
}