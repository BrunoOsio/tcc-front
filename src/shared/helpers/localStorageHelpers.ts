import { storage } from "../globalStyles/globalValues"

export const getStoredId = (): number => {
  return Number(localStorage.getItem(storage.id))
}