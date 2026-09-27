import { useState, useEffect, useMemo } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products.js";
import SearchFilter from "../components/SearchFilter.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { Loader2 } from "lucide-react";

export default function CatalogPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProducts(PRODUCTS);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, category]);

  return (
    <>
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-crimson">
            Kathmandu's own sports store
          </p>
          <h1 className="font-display text-4xl leading-tight text-cream sm:text-6xl">
            Gear up.
            <br />
            Play hard.
          </h1>
          <p className="mt-4 max-w-md text-cream/70">
            Footballs, running shoes, weights and everything in between — one
            catalog for every game you play.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            category={category}
            onCategoryChange={setCategory}
            categories={CATEGORIES}
          />
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center gap-3 py-20 text-slate">
            <Loader2 size={32} className="animate-spin text-crimson" />
            <p>Loading the catalog…</p>
          </div>
        ) : (
          <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
        )}
      </section>
    </>
  );
}
