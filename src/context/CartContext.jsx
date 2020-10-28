import React, {useState, createContext} from 'react'

export const CartContext = createContext()

export function CartProvider(props) {

    const [cartListData, setCartListData] = useState([])

    return (
        <div>
            <CartContext.Provider value={[cartListData, setCartListData]}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}