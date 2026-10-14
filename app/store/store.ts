import { create } from "zustand";
import type { productType } from "~/types/type";

type userType = {
  username: string;
  email: string;
};

type CartState = {
  count: number;
  user: userType;
  carts: productType[];
  addItem: () => void;
  removeItem: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  user: { username: "neverthelesse", email: "ajibola@gmail.com" },
  carts: [
    {
      id: 204,
      created_at: "2026-09-29 06:30:09.144939+00",
      price: 12506,
      numberofItem: 11529,
      priceCurrency: "dollar",
      sellerId: {
        email: "techhub@example.com",
        phone: "+2349078750747",
        address: "14 Central Road, Lagos",
        sellerid: 1,
        username: "techhub",
        profilePicture: "https://i.pravatar.cc/300?img=2",
      },
      manufactorer: "Ace",
      rate: 5,
      title: "Acer Pro Laptop",
      src: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85,https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85,https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85,https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85,https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=85",
      ],
    },
  ],

  addItem: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  removeItem: () =>
    set((state) => ({
      count: Math.max(0, state.count - 1),
    })),
}));
