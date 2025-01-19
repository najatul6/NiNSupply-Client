
const ShopSidebar = ({ category, setCategory }) => {
  const categories = ["password", "account", "class", "candle"];

  return (
    <div className="rounded-none lg:w-64 bg-background2 p-4 overflow-hidden">
      <h1 className="text-xl font-bold mb-4 text-center lg:text-left">Categories</h1>

      {/* Desktop Grid */}
      <div className="lg:grid gap-4 bg-background2 rounded-md hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-left px-4 py-2 text-lg  rounded-md transition-colors hover:text-baseColor capitalize ${
              category === cat
                ? " text-baseColor font-bold border border-baseColor" // Active styles
                : "bg-transparent text-white hover:underline" // Default styles
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown (Select) */}
      <div className="flex flex-col mt-4 lg:hidden">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 text-sm rounded-md bg-transparent active:bg-transparent focus:bg-gray-600 border border-baseColor text-baseColor"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShopSidebar;
