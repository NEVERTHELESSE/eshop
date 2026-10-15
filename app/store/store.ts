import { create } from "zustand";
import type { productType } from "~/types/type";

type userType = {
  username: string | null;
  email: string | null;
  profilePics: string | null;
  id: number | null;
};

type CartState = {
  count: number;
  user: userType;
  carts: productType[];
  addItem: () => void;
  removeItem: () => void;
  addUser: (data: any) => void;
};

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  user: { username: null, email: null, profilePics: null, id: null },
  carts: [],

  addItem: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  removeItem: () =>
    set((state) => ({
      count: Math.max(0, state.count - 1),
    })),

  addUser: (userData) =>
    set((state) => ({
      user: {
        ...state.user,
        ...userData,
      },
    })),
}));
