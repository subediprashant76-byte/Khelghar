import ProductCard from "./ProductCard.jsx";
import { PackageSearch } from "lucide-react";

export default function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate/30 py-16 text-center">
        <PackageSearch size={40} className="text-slate/50" />
        <p className="font-semibold text-charcoal">No gear matches that search</p>
        <p className="text-sm text-slate">Try a different keyword or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
