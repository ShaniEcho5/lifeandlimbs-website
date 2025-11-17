import { supabase } from '../../../../lib/supabase';

export async function GET() {
  try {
    if (!supabase) {
      throw new Error('Supabase client not available')
    }

    // Fetch published blog posts from Supabase
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error) throw error

    // Transform the data to match expected format
    const transformedPosts = posts?.map(post => {
      // Extract banner image from content if not in banner_image field
      let bannerImage = post.banner_image
      if (!bannerImage && post.content) {
        const bannerMatch = post.content.match(/<!-- BANNER_IMAGE:(.+?) -->/)
        if (bannerMatch) {
          bannerImage = bannerMatch[1]
        }
      }
      
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        category: post.category,
        banner_image: bannerImage,
        banner: bannerImage, // Add both formats for compatibility
        publishedAt: post.published_at,
        createdAt: post.created_at,
        updatedAt: post.updated_at
      }
    }) || []

    return Response.json(transformedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json([], { status: 500 });
  }
}