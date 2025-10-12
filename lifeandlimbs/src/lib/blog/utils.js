import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'posts');

// Configure marked with better options
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  headerPrefix: '',
});

// Custom renderer for better code block styling
const renderer = new marked.Renderer();
renderer.code = function(code, language) {
  const validLanguage = language || 'text';
  return `<pre class="blog-code-block"><code class="language-${validLanguage}">${code}</code></pre>`;
};

renderer.blockquote = function(quote) {
  return `<blockquote class="blog-blockquote">${quote}</blockquote>`;
};

renderer.image = function(href, title, text) {
  return `<img src="${href}" alt="${text}" title="${title || ''}" class="blog-image" />`;
};

marked.use({ renderer });

/**
 * Get all blog post file names
 */
export function getPostSlugs() {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * Get post data by slug
 */
export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const htmlContent = marked(content);

    return {
      slug,
      frontmatter: {
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        banner: data.banner || '',
        ...data
      },
      content: htmlContent,
      rawContent: content
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all posts with their metadata
 */
export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter(post => post !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });

  return posts;
}

/**
 * Get posts metadata only (for listing page)
 */
export function getPostsMetadata() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
    banner: post.frontmatter.banner,
    formattedDate: formatDate(post.frontmatter.date)
  }));
}

/**
 * Format date for display
 */
export function formatDate(dateString) {
  try {
    // Handle various date formats
    if (!dateString) {
      return 'Unknown date';
    }
    
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      console.error('Invalid date string:', dateString);
      return dateString;
    }
    
    return format(date, 'MMMM dd, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString || 'Unknown date';
  }
}

/**
 * Get reading time estimate
 */
export function getReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Generate blog post metadata for SEO
 */
export function generatePostMetadata(post) {
  if (!post) return {};

  const { frontmatter } = post;
  
  return {
    title: `${frontmatter.title} | Life and Limb Blog`,
    description: frontmatter.description,
    keywords: `life and limb, prosthetics, ${frontmatter.title}, blog, healthcare, nonprofit`,
    authors: [{ name: 'Life and Limb' }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://lifeandlimbs.org/blog/${post.slug}`,
      siteName: 'Life and Limb',
      images: frontmatter.banner ? [
        {
          url: frontmatter.banner,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        }
      ] : [],
      locale: 'en_US',
      type: 'article',
      publishedTime: frontmatter.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.banner ? [frontmatter.banner] : [],
    },
  };
}

/**
 * Generate structured data for blog post
 */
export function generatePostStructuredData(post) {
  if (!post) return null;

  const { frontmatter } = post;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': frontmatter.title,
    'description': frontmatter.description,
    'image': frontmatter.banner,
    'datePublished': frontmatter.date,
    'dateModified': frontmatter.date,
    'author': {
      '@type': 'Organization',
      'name': 'Life and Limb'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Life and Limb',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://lifeandlimbs.org/images/life-and-limb-logo.png'
      }
    }
  };
}