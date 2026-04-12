import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogs } from '../data/blogs';

const BlogPage = () => {
  return (
    <>
      <PageBanner
        desktopImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        mobileImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
        overlayText="OUR BLOGS"
      />

      <section className="py-[60px] lg:py-[100px] bg-white">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {blogs.map((blog) => (
              <div key={blog.id} className="group">
                <Link to={`/blog/${blog.slug}`} className="block overflow-hidden rounded-t-[5px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-[20px] border border-t-0 border-[#eee] rounded-b-[5px]">
                  <div className="text-[13px] text-[#814882] font-semibold uppercase tracking-wider mb-2">
                    {blog.date}
                  </div>
                  <Link to={`/blog/${blog.slug}`}>
                    <h3 className="text-[20px] font-bold text-[#333] leading-[1.4] mb-3 group-hover:text-[#814882] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-[#666] text-[15px] leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-[#814882] font-bold text-[14px] uppercase tracking-wider hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
