function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active-category" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;