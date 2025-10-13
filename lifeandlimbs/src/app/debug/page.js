import { getPostBySlug } from '../../lib/blog/utils';

export default function DebugPage() {
  let post = null;
  let error = null;
  
  try {
    post = getPostBySlug('test-post');
  } catch (e) {
    error = e.message;
  }
  
  return (
    <div className="p-8">
      <h1>Debug Post Data</h1>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
      
      {!post && !error && (
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          <p>No post found with slug 'test-post'</p>
        </div>
      )}
      
      {post && (
        <>
          <div className="mt-4">
            <h2>Frontmatter:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(post.frontmatter, null, 2)}
            </pre>
          </div>
          <div className="mt-4">
            <h2>Raw Content:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {post.rawContent || 'No raw content'}
            </pre>
          </div>
          <div className="mt-4">
            <h2>HTML Content:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {post.content || 'No HTML content'}
            </pre>
          </div>
          <div className="mt-4">
            <h2>Rendered HTML:</h2>
            <div 
              className="border p-4" 
              dangerouslySetInnerHTML={{ __html: post.content || '<p>No content to render</p>' }} 
            />
          </div>
        </>
      )}
    </div>
  );
}