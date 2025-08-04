function CategoryCard({ title, description, image }) {
  return (
    <div className="p-4  h-45 border rounded-lg text-center shadow hover:shadow-lg hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-25 object-cover rounded " />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default CategoryCard;
