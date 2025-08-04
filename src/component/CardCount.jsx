import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const CardCount= () => {
  const [cartCount, setCartCount] = useState(3); // Example starting count

  return (
    <div className="relative inline-block font-serif">
      <FaShoppingCart className="text-xl text-gray-800  hover:text-blue-800 mt-2" />
      
      {cartCount > 0 && (
        <span className="absolute -top-0 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CardCount;
