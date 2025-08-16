
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  totalPrice: 0,

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      const updatedPrice = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { cart: updatedCart, totalPrice: updatedPrice };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const updatedPrice = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { cart: updatedCart, totalPrice: updatedPrice };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      const updatedPrice = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { cart: updatedCart, totalPrice: updatedPrice };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const updatedPrice = updatedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { cart: updatedCart, totalPrice: updatedPrice };
    }),

  clearCart: () => set({ cart: [], totalPrice: 0 }),
}));
