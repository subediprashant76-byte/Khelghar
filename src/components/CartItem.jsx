import { useState } from "react";
import { Minus, Plus, Trash2, ImageOff } from "lucide-react";

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex items-center gap-4 border-b border-charcoal/10 py-4 last:border-b-0">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-charcoal">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center text-cream/40">
            <ImageOff size={18} />
          </div>
        ) : (
          <img
            src={item.product.image}
            alt={item.product.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="flex-1">
        <h4 className="font-semibold text-charcoal">{item.product.name}</h4>
        <p className="text-sm text-slate">{formatPrice(item.product.price)} each</p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-slate/20">
        <button
          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
          className="p-2 text-slate hover:text-crimson"
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
          className="p-2 text-slate hover:text-crimson"
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>

      <span className="w-24 text-right font-semibold text-charcoal">
        {formatPrice(item.product.price * item.quantity)}
      </span>

      <button
        onClick={() => onRemove(item.product.id)}
        className="p-2 text-slate hover:text-crimson"
        aria-label={`Remove ${item.product.name} from cart`}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
