import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";




export default function ProductCard({ product }: any) {
    // console.log(product);

    const productData = {
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
        thumbnail: product.images[0]
    }

    const isInCart = useSelector(
        (state: any) =>
            state.cart.items.some((item: any) => item.id === product.id)
    )


    const dispatch = useDispatch();
    return (
        <>
            <div className="product-card">
                <img
                    src={`${product.images[0]}`}
                    alt="Product Image"
                    className="product-img"
                />
                <div className="product-info">
                    <Link to={`/products/${product.id}`}>
                        <h3 className="product-title">{product.title}</h3>
                    </Link>

                    <p className="product-desc">{product.description}</p>
                    <div className="product-bottom">
                        <span className="product-price">$ {product.price}</span>
                        <button className="add-cart-btn" onClick={() => dispatch(addToCart(productData))}>Add to Cart</button>
                        {
                            isInCart &&
                            <button className="add-cart-btn" style={{ backgroundColor: "red" }} onClick={() => dispatch(removeFromCart(productData.id))}>Remove From Cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}