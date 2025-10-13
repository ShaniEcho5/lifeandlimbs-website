import { getPostsMetadata } from '../../../lib/blog/utils';

export async function GET() {
  try {
    const posts = getPostsMetadata();
    return Response.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json([], { status: 500 });
  }
}