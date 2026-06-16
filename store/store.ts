import { create } from "zustand"
export const useSearchStore = create((set) => ({
    searchTerm: "",
    setSearchTerm: (term) => set({searchTerm: term})
}))


export const useCategoryFilter = create((set) => ({
    categories: [], // all blog categories
    selectedCategory: "", // current selected filter
    setCategories: (cats) => set({ categories: cats }),
    setSelectedCategory: (cat) => set({ selectedCategory: cat }),
}));
