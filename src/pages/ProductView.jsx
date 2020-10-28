import React, { useState, useEffect, useContext } from 'react'
import ReviewList from '../components/ReviewList'
import firebase from '../firebaseConfig'
import { CartContext } from '../context/CartContext';

export default function ProductView(props) {
    const productId = props.match.params.productId
    const [productDataItem, setProductDataItem] = useState(null)
    const [reviewsData, setReviewsData] = useState(null)
    const [cartListData, setCartListData] = useContext(CartContext)

    const database = firebase.database()
    const productRef = database.ref(`/products/${productId}`)
    const reviewsRef = database.ref(`/reviews/${productId}`)

    useEffect(() => {
        productRef.once('value', snapshot => {
            setProductDataItem(snapshot.val())
        })
        reviewsRef.once('value', snapshot => {
            setReviewsData(snapshot.val())
        })
    }, [])

    function addToCartContext() {
        setCartListData([...cartListData, productDataItem])
    }

    return (
        <div className='col'>
            {(productDataItem && (
                <div className='my-auto'>
                    <img className="img-fluid" src={productDataItem.images[0].src.small} alt="finest  speciel product" />
                    <h3>{productDataItem.name} - Rating: {productDataItem.rating}</h3>
                    <p>{productDataItem.description}</p>
                    <p>In Stock: {productDataItem.stock}</p>
                    <p>Price: {productDataItem.price} Kr</p>
                    <button className="btn btn-success" onClick={addToCartContext}>➕🛒</button>
                </div>
            ))}
            <h3>Reviews: </h3>
            {(reviewsData && reviewsData.map((item, index) => {
                return (
                    <ReviewList key={index} review={item} />
                )
            }))}
        </div>
    )
}
