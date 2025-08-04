import React from 'react';
import ProductCard from './ProductCard';

const productData = [
  { id: 1, title: "dried mango", price: "24$", image: "product__2.webp" },
  { id: 2, title: "banana cinemon", price: "73$", image: "product__3.webp" },
  { id: 3, title: "crunchy crips", price: "13$", image: "product__4.webp" },
  { id: 4, title: "tomato sos", price: "16$", image: "product__5.webp" },
];

function FeatureSectionFruit() {
  return (
    <div className="py-6 font-serif px-4 sm:px-6 lg:px-8">
    
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black">Fruits and Vegetables</h2>
          <p className="py-2 text-gray-700">
            Buy Farm Fresh Fruits and Vegetables Online at Best Price...
          </p>
        </div>

  
        <div className="flex flex-wrap gap-2">
          <button className="bg-green-300 text-white rounded py-1 px-4 hover:bg-green-700 transition">
            Fruits
          </button>
          <button className="bg-gray-200 rounded py-1 px-4 hover:bg-gray-500 transition">
            Vegetables
          </button>
          <button className="bg-gray-200 rounded py-1 px-4 hover:bg-gray-500 transition">
            Bread and Bakery
          </button>
        </div>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-6">
     
        <div className="md:col-span-1">
          <img
            src="feature__1.webp"
            alt="Featured"
            className="w-full h-full object-cover rounded"
          />
        </div>

    
        <div className="md:col-span-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productData.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSectionFruit;
