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
    const transformedPosts = posts?.map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      category: post.category,
      publishedAt: post.published_at,
      createdAt: post.created_at,
      updatedAt: post.updated_at
    })) || []

    return Response.json(transformedPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json([], { status: 500 });
  }
}