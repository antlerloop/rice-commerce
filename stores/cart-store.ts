// src/stores/cart-store.ts
import { CartStoreContext } from "@/providers/CartStoreProvider";
import { Product } from "@/sanity/types/product";
import { useContext } from "react";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

export type CartState = {
  items: Array<{ product: Product; quantity: number }>;
};

export type CartActions = {
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (product: Product) => void;
  addItem: (product: Product, quantity: number) => void;
};

export type CartStore = CartState & CartActions;

export const initCartStore = (): CartState => {
  return { items: [] };
};

export const defaultInitState: CartState = {
  items: [],
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    setQuantity: (productId, quantity) => {
      set((state) => {
        const targetItem = state.items.find(
          (item) => item.product._id === productId
        );
        return {
          items: [
            ...state.items.filter((item) => item.product._id !== productId),
            ...(targetItem ? [{ ...targetItem, quantity }] : []),
          ],
        };
      });
    },
    addItem: (product, quantity) =>
      set((state) => ({
        items: [...state.items, { product, quantity }],
      })),
    removeItem: (product) =>
      set((state) => ({
        items: state.items.filter((item) => product._id !== item.product._id),
      })),
  }));
};

export const useCartStore = <T>(selector: (store: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
