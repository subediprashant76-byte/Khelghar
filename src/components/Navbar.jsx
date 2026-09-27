import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar({ cartCount }) {
  const linkClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-wide transition-colors ${
      isActive ? "text-crimson" : "text-cream/80 hover:text-cream"
    }`;

  return (
    <header className="sticky top-0 z-20 bg-charcoal">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-display text-2xl text-cream">Khel</span>
          <span className="font-display text-2xl text-crimson">Ghar</span>
        </Link>

        <div className="hidden gap-8 sm:flex">
          <NavLink to="/" className={linkClass}>
            Catalog
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>
        </div>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-cream transition-colors hover:bg-cream/20"
        >
          <ShoppingCart size={18} />
          <span className="hidden text-sm font-medium sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-crimson text-xs font-bold text-cream">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
