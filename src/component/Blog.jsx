import React from 'react'
import BlogCard from './BlogCard';
const blogData = [
  { id: 1, title: "Healthy Food Healthy Life", description: "9 ", image: "post__1.webp", date:"Aug 25 ,2023" },
  { id: 2, title: "Healthy Food Healthy Life", description: "7 ", image: "post__2.webp" ,date:"May 2 ,2002"},
  { id: 3, title: "Healthy Food Healthy Life", description: "12 ", image: "post__3.webp" ,date:"July 23 ,2012"},
 ];
function Blog() {
  return (
    <div className='blogs font-serif '>
      <h1 className='flex  mt-2 justify-items center  text-3xl  font-bold '>Latest News</h1>
      <p className='flex text-gray-500'>Present post in abest way to highlight intresting moment of your blog.</p>

      <div className="container mx-auto py-5 px-4 font-serif">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {blogData.map((item) => (
          <BlogCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Blog
