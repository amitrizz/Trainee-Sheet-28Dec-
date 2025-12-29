// types.ts
export interface Product {
    id: number
    title: string
    price: number
    stock: number
    thumbnail: string
}

export interface CartItem extends Product {
    quantity: number
}

export interface CartState {
    items: CartItem[]
    totalQuantity: number
    totalPrice: number
}
