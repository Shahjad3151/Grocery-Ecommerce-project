import React from 'react';
import { IoStar } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";

function ProductCard({ image, title, price }) {
  return (
    <div className=" shadow-lg p-4 border rounded-lg text-center shadow hover:shadow-lg  hover:scale-105 transition-transform relative bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md  hover:scale-105 transition-transform"
      />

      <div className="flex justify-start mt-2 text-yellow-400 text-lg">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <AiOutlineStar />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-red-600 mt-1">{price}</p>

      <div className="absolute top-45 right-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
        <FaShoppingBag />
      </div>
    </div>
  );
}

export default ProductCard;
