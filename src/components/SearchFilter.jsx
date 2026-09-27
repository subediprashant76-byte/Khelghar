import { Search } from "lucide-react";

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="relative flex-1">
        <Search
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search gear, e.g. running shoes"
          className="w-full rounded-lg border border-slate/20 bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal placeholder:text-slate/60 focus:border-crimson focus:outline-none"
        />
      </div>

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-lg border border-slate/20 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-crimson focus:outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </form>
  );
}
