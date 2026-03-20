import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
	id: number;
	name: string;
	price: number;
	image: string;
	slug: string;
	quantity: number;
};

type CartStore = {
	items: CartItem[];
	isOpen: boolean;
	addItem: (item: Omit<CartItem, "quantity">) => void;
	removeItem: (id: number) => void;
	updateQuantity: (id: number, quantity: number) => void;
	clearCart: () => void;
	openCart: () => void;
	closeCart: () => void;
	toggleCart: () => void;
	totalItems: () => number;
	totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],
			isOpen: false,

			addItem: (item) => {
				set((state) => {
					const existing = state.items.find((i) => i.id === item.id);
					if (existing) {
						return {
							items: state.items.map((i) =>
								i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
							),
						};
					}
					return {
						items: [...state.items, { ...item, quantity: 1 }],
					};
				});
				// Auto-open cart drawer on add
				set({ isOpen: true });
			},

			removeItem: (id) =>
				set((state) => ({
					items: state.items.filter((i) => i.id !== id),
				})),

			updateQuantity: (id, quantity) => {
				if (quantity < 1) {
					get().removeItem(id);
					return;
				}
				set((state) => ({
					items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
				}));
			},

			clearCart: () => set({ items: [] }),
			openCart: () => set({ isOpen: true }),
			closeCart: () => set({ isOpen: false }),
			toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

			totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

			totalPrice: () =>
				get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
		}),
		{ name: "krm-cart" }
	)
);
