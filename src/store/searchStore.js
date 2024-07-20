import { create } from 'zustand'

export const useSearchStore = create((set) => ({
  searchWord: '',
  updateSearchWord: (newWord) => set({ searchWord: newWord }),
}))
