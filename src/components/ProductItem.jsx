import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem({item}) {
    return (
        <div className="card-group col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top img-fluid" src={item.images[0].src.small} alt="finest product"/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link to={`/products/${item.id}`}><span className="btn btn-primary">Show More</span></Link>
                </div>
            </div>
        </div>
    )
}
