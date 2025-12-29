import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";


export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <Link to="/">ShopX</Link>
                    </div>
                    <nav className="nav">
                        <Link to="/profile">profiles</Link>
                        <Link to="/products">Products</Link>
                    </nav>
                    <AddToCart/>
                </div>
            </header>
        </>
    )
}