import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

export default function Navbar() {

    const [cartListData, setCartListData] = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">E-Commerce</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/'><span className="navbar-brand">Home</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/cart'><span className="navbar-brand">Cart {cartListData.length} </span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
