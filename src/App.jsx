import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { PRODUCTS } from "./data/products.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import CartPage from "./pages/CartPage.jsx";

export default function App() {
  const [cart, setCart] = useLocalStorage("khelghar-cart", []);

  const addToCart = (productId) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.productId === productId);
      if (existing) {
        return prev.map((entry) =>
          entry.productId === productId
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((entry) => (entry.productId === productId ? { ...entry, quantity } : entry))
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((entry) => entry.productId !== productId));
  };

  const cartItems = cart
    .map((entry) => {
      const product = PRODUCTS.find((p) => p.id === entry.productId);
      return product ? { product, quantity: entry.quantity } : null;
    })
    .filter(Boolean);

  const cartCount = cart.reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar cartCount={cartCount} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<CatalogPage onAddToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
