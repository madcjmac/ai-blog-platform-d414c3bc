import Link from 'next/link'

export default function PostCard({ post }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  return (
    <article className="card hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
        <Link href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.content.length > 150 
          ? `${post.content.substring(0, 150)}...` 
          : post.content}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="font-medium">By {post.author_name || 'Anonymous'}</span>
        <time dateTime={post.created_at}>
          {formatDate(post.created_at)}
        </time>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <Link href={`/posts/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
            Read More →
          </Link>
          <span className="text-gray-400 text-xs">
            {post.comment_count || 0} comments
          </span>
        </div>
      </div>
    </article>
  )
}
