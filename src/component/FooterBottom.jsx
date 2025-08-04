import React from 'react';

const FooterBottom = () => {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-6 mt-6 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h4 className="text-lg font-semibold mb-4">About FreshMart</h4>
          <p className="text-sm text-gray-300">
            FreshMart delivers farm-fresh groceries right to your doorstep. We prioritize quality, freshness, and sustainability.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/deals" className="hover:underline">Deals</a></li>
            <li><a href="/recipes" className="hover:underline">Recipes</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/returns" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 text-sm text-black bg-yellow-50 rounded w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 px-4 py-2 rounded text-sm font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-gray-300">
        <p>&copy; 2025 FreshMart. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
