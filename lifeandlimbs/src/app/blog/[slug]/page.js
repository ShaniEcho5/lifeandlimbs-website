import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

// Helper function to get reading time
function getReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

// Helper function to format date
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    if (!supabase) return {};
    
    const { data: post } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (!post) return {};

    const baseUrl = 'https://lifeandlimbs.org';
    const pageUrl = `${baseUrl}/blog/${post.slug}`;
    
    return {
      title: post.meta_title || `${post.title} | Life and Limb`,
      description: post.meta_description || post.excerpt || post.title,
      keywords: post.keywords || post.focus_keyword || post.category,
      robots: post.robots || 'index, follow',
      
      // Open Graph
      openGraph: {
        title: post.og_title || post.title,
        description: post.og_description || post.excerpt || post.title,
        type: 'article',
        url: pageUrl,
        siteName: 'Life and Limb',
        publishedTime: post.published_at,
        modifiedTime: post.updated_at,
        authors: [post.author || 'Life and Limb'],
        images: post.og_image || post.banner_image ? [{
          url: post.og_image || post.banner_image,
          alt: post.title,
          width: 1200,
          height: 630,
        }] : [],
        locale: 'en_US',
      },

      // Twitter
      twitter: {
        card: 'summary_large_image',
        title: post.twitter_title || post.og_title || post.title,
        description: post.twitter_description || post.og_description || post.excerpt || post.title,
        images: post.twitter_image || post.og_image || post.banner_image ? [post.twitter_image || post.og_image || post.banner_image] : [],
        creator: '@lifeandlimb',
        site: '@lifeandlimb',
      },


      
      // Article specific and additional meta tags
      other: {
        'robots': post.robots || 'index, follow',
        'article:author': post.author || 'Life and Limb',
        'article:published_time': post.published_at,
        'article:modified_time': post.updated_at,
        'article:section': post.category,
        'article:tag': post.keywords,
      },

      // Additional SEO
      alternates: {
        canonical: post.canonical_url || pageUrl,
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {};
  }
}

// Generate static paths for all posts
export async function generateStaticParams() {
  try {
    if (!supabase) return [];
    
    const { data: posts } = await supabase
      .from('blogs')
      .select('slug')
      .eq('status', 'published');
    
    return posts?.map((post) => ({ slug: post.slug })) || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  let post;
  try {
    if (!supabase) {
      notFound();
    }
    
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (error || !data) {
      notFound();
    }
    
    post = data;
    

  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }

  // Extract banner image from content if not in banner_image field
  let bannerImage = post.banner_image
  if (!bannerImage && post.content) {
    const bannerMatch = post.content.match(/<!-- BANNER_IMAGE:(.+?) -->/)
    if (bannerMatch) {
      bannerImage = bannerMatch[1]
      // Remove the banner comment from content for display
      post.content = post.content.replace(/<!-- BANNER_IMAGE:.+? -->\n?/, '')
    }
  }

  const readingTime = getReadingTime(post.content);
  const formattedDate = formatDate(post.published_at || post.created_at);
  
  // Generate canonical URL
  const baseUrl = 'https://lifeandlimbs.org';
  const canonicalUrl = post.canonical_url || `${baseUrl}/blog/${post.slug}`;
  
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.meta_description || post.excerpt,
    "image": post.og_image || bannerImage || "https://lifeandlimbs.org/images/default-blog.jpg",
    "author": {
      "@type": "Organization",
      "name": post.author || "Life and Limb",
      "url": "https://lifeandlimbs.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Life and Limb",
      "url": "https://lifeandlimbs.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lifeandlimbs.org/images/logo.png"
      }
    },
    "url": `https://lifeandlimbs.org/blog/${post.slug}`,
    "datePublished": post.published_at,
    "dateModified": post.updated_at || post.published_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lifeandlimbs.org/blog/${post.slug}`
    },
    "keywords": post.keywords || post.focus_keyword,
    "articleSection": post.category,
    "wordCount": post.content?.split(' ').length || 0,
    "inLanguage": "en-US"
  };

  return (
    <>
      {/* Manual Canonical Link - fallback for SEO tools */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content={post.robots || 'index, follow'} />
      
      {/* Structured Data for SEO */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="min-h-screen bg-white">
        {/* Article Header */}
        <header className="relative">

          
          {/* Banner Image */}
          {bannerImage && bannerImage.trim() !== '' && (
            <div className="relative h-64 md:h-80 lg:h-96 w-full mb-8">
              <Image
                src={bannerImage}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg" />
            </div>
          )}

          {/* Article Title and Meta */}
          <div className="bg-gray-50 p-4 md:p-8">
            <div className="container mx-auto max-w-4xl">
              <div className="text-gray-900">
                {/* Breadcrumb */}
                <nav className="mb-4" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2 text-sm list-none">
                    <li className="list-none">
                      <Link href="/" className="hover:underline opacity-75">
                        Home
                      </Link>
                    </li>
                    <li className="list-none opacity-50" aria-hidden="true">/</li>
                    <li className="list-none">
                      <Link href="/blog" className="hover:underline opacity-75">
                        Blog
                      </Link>
                    </li>
                    <li className="list-none opacity-50" aria-hidden="true">/</li>
                    <li className="opacity-90 list-none" aria-current="page">{post.title}</li>
                  </ol>
                </nav>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <time dateTime={post.published_at || post.created_at}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {readingTime} min read
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {post.author || 'Life and Limb Team'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          <article className="prose prose-lg prose-blue max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            {/* Share Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex gap-4">
                <ShareButton
                  platform="twitter"
                  url={`https://lifeandlimbs.org/blog/${post.slug}`}
                  title={post.title}
                />
                <ShareButton
                  platform="facebook"
                  url={`https://lifeandlimbs.org/blog/${post.slug}`}
                />
                <ShareButton
                  platform="linkedin"
                  url={`https://lifeandlimbs.org/blog/${post.slug}`}
                  title={post.title}
                  summary={post.excerpt}
                />
                <ShareButton
                  platform="whatsapp"
                  text={`${post.title} - https://lifeandlimbs.org/blog/${post.slug}`}
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Get Involved with Life and Limb
              </h3>
              <p className="text-gray-600 mb-6">
                Join our mission to provide free prosthetic limbs and restore mobility for those in need across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.gofundme.com/f/fzcv9-life-and-limb/donate"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Dinate Now
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

function ShareButton({ platform, url, title, summary, text }) {
  const getShareUrl = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title || '');
    const encodedSummary = encodeURIComponent(summary || '');
    const encodedText = encodeURIComponent(text || '');

    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`;
      case 'whatsapp':
        return `https://wa.me/?text=${encodedText}`;
      default:
        return '#';
    }
  };

  const getIcon = () => {
    switch (platform) {
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const platformNames = {
    twitter: 'Twitter',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp'
  };

  const platformColors = {
    twitter: 'text-blue-500 hover:bg-blue-50',
    facebook: 'text-blue-600 hover:bg-blue-50',
    linkedin: 'text-blue-700 hover:bg-blue-50',
    whatsapp: 'text-green-600 hover:bg-green-50'
  };

  return (
    <a
      href={getShareUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 transition-colors ${platformColors[platform]}`}
      aria-label={`Share on ${platformNames[platform]}`}
    >
      {getIcon()}
      <span className="ml-2 font-medium">{platformNames[platform]}</span>
    </a>
  );
}