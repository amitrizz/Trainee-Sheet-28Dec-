import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/fetchData";
import { useParams } from "react-router-dom";
import "./ProductPage.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

export default function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState({
        id: Number(productId),
        title: "",
        price: 0.0,
        stock: 0,
        thumbnail: ""
    });
    const isInCart = useSelector(
        (state: any) =>
            state.cart.items.some(
                (item: any) => item.id === Number(productId)
            )
    );



    const dispatch = useDispatch();

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await fetchSingleProduct(Number(productId));
                setProduct(data);
                const product = {
                    id: data.id,
                    title: data.title,
                    price: data.price,
                    stock: data.stock,
                    thumbnail: data.images[0]
                }
                setProductData(product)
            } catch (err) {
                console.error(err);
            } finally {

                setLoading(false);
            }
        };

        loadProduct();
    }, [productId]);

    if (loading) return <h2 className="loader">Loading product...</h2>;
    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="product-page">
            {/* IMAGE SECTION */}
            <div className="product-images">
                <img src={product.thumbnail} alt={product.title} className="main-img" />
                <div className="image-list">
                    {product.images.map((img: any, i: any) => (
                        <img key={i} src={img} alt="product" />
                    ))}
                </div>
            </div>

            {/* DETAILS SECTION */}
            <div className="product-details">
                <h1>{product.title}</h1>
                <p className="brand">{product.brand} • {product.category}</p>

                <div className="price-box">
                    <span className="price">₹{product.price}</span>
                    <span className="discount">{product.discountPercentage}% OFF</span>
                </div>

                <p className="rating">⭐ {product.rating} / 5</p>
                <p className={`stock ${product.stock < 10 ? "low" : ""}`}>
                    {product.availabilityStatus}
                </p>

                <p className="description">{product.description}</p>

                <div className="specs">
                    <p><b>SKU:</b> {product.sku}</p>
                    <p><b>Weight:</b> {product.weight} kg</p>
                    <p>
                        <b>Dimensions:</b> {product.dimensions.width} ×{" "}
                        {product.dimensions.height} × {product.dimensions.depth}
                    </p>
                </div>
                <div >
                    {
                        !isInCart ? (
                            <button
                                className="buy-btn"
                                onClick={() => dispatch(addToCart(productData))}
                            >
                                Add to Cart
                            </button>
                        ) : (
                            <button
                                className="buy-btn"
                                style={{ backgroundColor: "red" }}
                                onClick={() => dispatch(removeFromCart(productData.id))}
                            >
                                Remove From Cart
                            </button>
                        )
                    }

                </div>
                {/* <button className="buy-btn">Add to Cart</button> */}
            </div>

            {/* REVIEWS */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                {product.reviews.length === 0 ? (
                    <p>No reviews yet</p>
                ) : (
                    product.reviews.map((r: any, i: any) => (
                        <div key={i} className="review">
                            <strong>{r.reviewerName}</strong>
                            <span>⭐ {r.rating}</span>
                            <p>{r.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}