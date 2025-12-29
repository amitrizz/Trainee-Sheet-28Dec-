import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/cartSlice"

export default function CardList() {
  const items = useSelector((state: any) => state.cart.items)
  const dispatch = useDispatch()
  console.log(items);
  

  if (items.length === 0) {
    return <h2>Your cart is empty</h2>
  }

  return (
    <main className="cart-page">
      <h2>Your Cart</h2>

      {items.map((item: any) => (
        <div className="cart-item" key={item.id}>
          
          {/* IMAGE */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="cart-item-img"
          />

          <div className="item-info">
            <p className="item-name">{item.title}</p>
            <p className="item-price">$ {item.price}</p>
          </div>

          <div className="item-actions">
            <input
              type="number"
              value={item.quantity}
              min="1"
              readOnly
            />
            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>
          Total: ₹
          {items.reduce(
            (sum: number, item: any) =>
              sum + item.price * item.quantity,
            0
          )}
        </h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </main>
  )
}
