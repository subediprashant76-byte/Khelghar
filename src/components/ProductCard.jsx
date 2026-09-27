import { useState } from "react";
import { Plus, Check, ImageOff } from "lucide-react";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}

export default function ProductCard({ product, onAddToCart }) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const handleAdd = () => {
    onAddToCart(product.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-white transition-shadow hover:shadow-lg">
      <div className="h-36 w-full overflow-hidden bg-charcoal">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center text-cream/40">
            <ImageOff size={28} />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-crimson">
          {product.category}
        </span>
        <h3 className="font-semibold leading-snug text-charcoal">{product.name}</h3>
        <p className="flex-1 text-sm text-slate">{product.blurb}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-lg text-charcoal">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-cream transition-colors ${
              justAdded ? "bg-green-600" : "bg-crimson hover:bg-crimson-dark"
            }`}
          >
            {justAdded ? <Check size={16} /> : <Plus size={16} />}
            {justAdded ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
