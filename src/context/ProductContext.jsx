import React, {useState, createContext} from 'react'

export const ProductContext = createContext()

export function ProductProvider(props) {

    const [productListData, setProductListData] = useState(null)

    return (
        <div>
            <ProductContext.Provider value={[productListData, setProductListData]}>
                {props.children}
            </ProductContext.Provider>
        </div>
    )
}
