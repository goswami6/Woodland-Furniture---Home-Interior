import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogs } from '../data/blogs';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-[100px] text-center">
        <h2 className="text-[24px] font-bold mb-4">Blog Not Found</h2>
        <Link to="/blog" className="text-[#814882] underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <>
      <PageBanner
        desktopImage={blog.image}
        mobileImage={blog.image}
        overlayText="BLOG DETAILS"
      />

      <section className="py-[60px] lg:py-[100px] bg-white">
        <div className="max-w-[900px] px-5 mx-auto">
          <div className="mb-8">
            <div className="text-[14px] text-[#814882] font-semibold uppercase tracking-[2px] mb-3">
              {blog.date}
            </div>
            <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#333] leading-tight mb-6">
              {blog.title}
            </h1>
          </div>

          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div 
            className="blog-content prose prose-lg max-w-none text-[#444] leading-[1.8] text-[16px] md:text-[18px]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-16 pt-8 border-t border-[#eee] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[#999] font-medium">Share:</span>
              <div className="flex gap-3">
                {/* Social Share Icons (Placeholders) */}
                <button className="w-10 h-10 rounded-full bg-[#f8f8f8] flex items-center justify-center text-[#814882] hover:bg-[#814882] hover:text-white transition-colors">
                  f
                </button>
                <button className="w-10 h-10 rounded-full bg-[#f8f8f8] flex items-center justify-center text-[#814882] hover:bg-[#814882] hover:text-white transition-colors">
                  t
                </button>
                <button className="w-10 h-10 rounded-full bg-[#f8f8f8] flex items-center justify-center text-[#814882] hover:bg-[#814882] hover:text-white transition-colors">
                  in
                </button>
              </div>
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#814882] text-white rounded-full font-semibold uppercase tracking-wider hover:bg-[#6a3a6b] transition-all shadow-md active:scale-95"
            >
              Back to all blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Blogs */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="w-full px-5 md:px-[60px] min-[1441px]:px-[100px] mx-auto">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#333] mb-10 uppercase tracking-tight">
            More Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((rec) => (
                <Link key={rec.id} to={`/blog/${rec.slug}`} className="group">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={rec.image} 
                      alt={rec.title} 
                      className="w-full aspect-[16/9] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-[18px] font-bold text-[#333] group-hover:text-[#814882] transition-colors line-clamp-2">
                    {rec.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;
