import { generateRSSFeed } from '../../lib/blog/utils';

export async function GET() {
  try {
    const rss = generateRSSFeed();
    
    return new Response(rss, {
      headers: {
        'Content-Type': 'application/rss+xml',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}