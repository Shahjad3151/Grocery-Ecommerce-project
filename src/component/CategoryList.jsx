
import React from 'react';
import CategoryCard from './CategoryCard';

const categoryData = [
  { id: 1, title: "Fresh Fruits", description: "9 Products", image: "category__1.webp" },
  { id: 2, title: "Fresh Vegs", description: "7 Products", image: "category__2.webp" },
  { id: 3, title: "Canned goods", description: "12 Products", image: "category__3.webp" },
  { id: 4, title: "Bread", description: "13 Products", image: "category__4.webp" },
  { id: 5, title: "Fish", description: "16 Products", image: "category__5.webp" },
  { id: 6, title: "Fresh Fruits", description: "15 Products", image: "category__6.webp" },
  { id: 7, title: "Dairy", description: "10 Products", image: "category__7.webp" },
  { id: 8, title: "Eggs", description: "13 Products", image: "category__3.webp" },
];

function CategoryList() {
  return (
    <div className="container mx-auto py-5 px-4 font-serif ">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {categoryData.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
