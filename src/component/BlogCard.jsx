function BlogCard({ title, description, image, date }) {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg hover:scale-102 transition-transform">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t" />
      
      <div className="p-4">
        <div className="flex text-sm text-green-500 space-x-2 mb-2">
          <span>{date}</span>
          <span>/</span>
          <span>{description} Comments</span>
        </div>
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

export default BlogCard;
