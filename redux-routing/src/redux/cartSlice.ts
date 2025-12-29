import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, CartState, Product } from "./type"

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            
            const product = action.payload
            console.log(product)

            const existingItem = state.items.find(
                (item:any) => item.id === product.id
            )

            if (existingItem) {
                if (existingItem.quantity < product.stock) {
                    existingItem.quantity += 1
                }
            } else {
                state.items.push({
                    ...product,
                    quantity: 1
                })
            }

            state.totalQuantity += 1
            state.totalPrice += product.price
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const item = state.items.find((i:any) => i.id === id)

            if (!item) return

            state.totalQuantity -= item.quantity
            state.totalPrice -= item.price * item.quantity
            state.items = state.items.filter((i:any) => i.id !== id)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
