import { createContext, ReactNode, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import BuyingBasket from "../routes/buying-basket/BuyingBasket"

//type props for the shoppingcart
type ShoppingCartProviderProps = {
    children: ReactNode
}

//creating type for the cart's product
type CartItem = {
    id: number,
    quantity: number,
    name?: string
}

//creating type for the cart's options
type ShoppingCartContexT = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
    cartItemData: CartItem[]
    shoppingCartItems: any
}

//creating context as the type that we create ^
const ShoppingCartContext = createContext({} as ShoppingCartContexT)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

//function for shopping cart
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [cartItemData, setCartItemData] = useLocalStorage<CartItem[]>("cartItemData", [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    //getting the number of products we have inside the cart
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    //the products inside the cart
    function shoppingCartItems(item: CartItem) {
        setCartItemData([...cartItemData, item])
    }

    //increase cart's quantity
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    //decrease cart's quantity
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    //remove product from the cart
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }
    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, shoppingCartItems, cartItemData, openCart, closeCart, cartItems, cartQuantity }}>
            {children}
            <BuyingBasket isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}
