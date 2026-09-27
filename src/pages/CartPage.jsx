import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import CartItem from "../components/CartItem.jsx";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}

const SHIPPING_FLAT_RATE = 150;

export default function CartPage({ cartItems, onUpdateQuantity, onRemove }) {
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? SHIPPING_FLAT_RATE : 0;
  const total = subtotal + shipping;

  if (checkedOut) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-24 text-center">
        <ShoppingBag size={40} className="text-crimson" />
        <h2 className="font-display text-2xl text-charcoal">Order placed!</h2>
        <p className="max-w-sm text-slate">
          This is a course-project demo, so nothing was actually charged or
          shipped — but your cart has been cleared.
        </p>
        <Link
          to="/"
          className="mt-4 rounded-lg bg-crimson px-5 py-2.5 text-sm font-semibold text-cream hover:bg-crimson-dark"
        >
          Back to catalog
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-24 text-center">
        <ShoppingBag size={40} className="text-slate/40" />
        <h2 className="font-display text-2xl text-charcoal">Your cart is empty</h2>
        <p className="text-slate">Browse the catalog and add some gear.</p>
        <Link
          to="/"
          className="mt-4 rounded-lg bg-crimson px-5 py-2.5 text-sm font-semibold text-cream hover:bg-crimson-dark"
        >
          Go to catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="font-display text-3xl text-charcoal">Your cart</h1>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-xl border border-charcoal/10 bg-white p-4 lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </div>

        <div className="h-fit rounded-xl border border-charcoal/10 bg-white p-5">
          <h2 className="font-semibold text-charcoal">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm text-slate">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatPrice(shipping)}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-charcoal/10 pt-4 font-semibold text-charcoal">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button
            onClick={() => setCheckedOut(true)}
            className="mt-5 w-full rounded-lg bg-crimson py-2.5 text-sm font-semibold text-cream hover:bg-crimson-dark"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
