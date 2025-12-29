import type { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


export default function AddToCart() {
    const quantity = useSelector((state: any) => state.cart.totalQuantity);


    // console.log(selector);

    return (
        <>
            <div className="header-actions">
                <Link to="/cartlist">
                    <button className="cart-btn">
                        🛒 Cart <span className="cart-count">{quantity}</span>
                    </button>
                </Link>
            </div>
        </>
    )
}