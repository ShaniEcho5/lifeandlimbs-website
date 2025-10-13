import Link from 'next/link';
import Image from 'next/image';
import { getPostsMetadata } from '../../lib/blog/utils';

export const metadata = {
  title: 'Blog | Life and Limb - Stories of Hope and Innovation',
  description: 'Read inspiring stories, technological advances, and updates from Life and Limb - providing free prosthetic limbs to those in need across India.',
  keywords: 'life and limb blog, prosthetics stories, healthcare innovation, nonprofit blog, amputee support, mobility restoration',
  openGraph: {
    title: 'Blog | Life and Limb',
    description: 'Read inspiring stories, technological advances, and updates from Life and Limb.',
    url: 'https://lifeandlimbs.org/blog',
    siteName: 'Life and Limb',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getPostsMetadata();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#026aa1] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Life and Limb Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Stories of hope, innovation, and transformation in prosthetic care
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Latest Updates
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
                Inspiring Stories
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                Community Impact
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No posts yet</h2>
              <p className="text-gray-500">Check back soon for inspiring stories and updates!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:gap-12">
              {posts.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} featured={index === 0} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-16">
          {/* <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive the latest stories and updates from Life and Limb
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function BlogPostCard({ post, featured = false }) {
  const cardClass = featured 
    ? "bg-white rounded-2xl shadow-lg overflow-hidden lg:flex lg:items-center" 
    : "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden";

  return (
    <article className={cardClass}>
      {featured ? (
        <>
          {/* Featured Post Layout */}
          <div className="lg:w-1/2">
            {post.banner && (
              <div className="relative h-64 lg:h-full">
                <Image
                  src={post.banner}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12">
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-[#026aa1] text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
              <span className="text-gray-500 text-sm ml-4">{post.formattedDate}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#026aa1] transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-[#026aa1] font-semibold hover:text-[#026aa1] transition-colors"
            >
              Read Full Story
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Regular Post Layout */}
          {post.banner && (
            <div className="relative h-48 sm:h-56">
              <Image
                src={post.banner}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <time dateTime={post.date}>{post.formattedDate}</time>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-[#026aa1] font-medium hover:text-blue-700 transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </>
      )}
    </article>
  );
}