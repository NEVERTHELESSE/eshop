import { create } from "zustand";

type CartState = {
  count: number;
  addItem: () => void;
  removeItem: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  count: 0,

  addItem: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  removeItem: () =>
    set((state) => ({
      count: Math.max(0, state.count - 1),
    })),
}));
