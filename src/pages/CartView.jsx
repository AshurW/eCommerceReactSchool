import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';

export default function CartView() {

    const [cartListData, setCartListData] = useContext(CartContext)

    return (
        <div>
            {( cartListData && cartListData.map((item, index) => {
                return (
                    <p>{item.name}</p>
                )
            }))}
        </div>
    )
}
