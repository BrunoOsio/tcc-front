export type NonFIRSTModality = {
  initials: NonFIRSTModalityOptions;
  name: string;
  hasNumber: boolean;
}


type NonFIRSTModalityOptions = "CRC" | "VEX" | "OBR" | "ANY";