import { getPostBySlug } from '../../lib/blog/utils';

export default function DebugPage() {
  const post = getPostBySlug('test-post');
  
  return (
    <div className="p-8">
      <h1>Debug Post Data</h1>
      <div className="mt-4">
        <h2>Frontmatter:</h2>
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(post?.frontmatter, null, 2)}</pre>
      </div>
      <div className="mt-4">
        <h2>Raw Content:</h2>
        <pre className="bg-gray-100 p-4 rounded">{post?.rawContent}</pre>
      </div>
      <div className="mt-4">
        <h2>HTML Content:</h2>
        <pre className="bg-gray-100 p-4 rounded">{post?.content}</pre>
      </div>
      <div className="mt-4">
        <h2>Rendered HTML:</h2>
        <div className="border p-4" dangerouslySetInnerHTML={{ __html: post?.content }} />
      </div>
    </div>
  );
}