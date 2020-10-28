import React, { useState, useEffect, useContext } from 'react'
import ProductItem from './ProductItem'
import { ProductContext } from '../context/ProductContext';

import firebase from '../firebaseConfig'

export default function ProductList() {

    const [productListData, setProductListData] = useContext(ProductContext)

    const database = firebase.database()
    const productsRef = database.ref('/products')

    useEffect(() => {
        productsRef.on('value', snapshot => {
            setProductListData(snapshot.val())
        })
    }, [])

    return (
        <div className='row'>
            {productListData && Object.entries(productListData).map((item, index) => {
                return (
                    <ProductItem key={index} item={item[1]} />
                )
            })}
        </div>
    )
}
