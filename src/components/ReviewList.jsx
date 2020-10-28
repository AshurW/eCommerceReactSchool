import React from 'react'

export default function ReviewList({review}) {
    return (
        <div>
            <h5>Title: {review.title}</h5>
            <p>Desc: {review.description}</p>
            <p>By: {review.author.name}</p>
        </div>
    )
}
