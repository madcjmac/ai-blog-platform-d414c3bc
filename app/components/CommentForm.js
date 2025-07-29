'use client'

import { useState } from 'react'

export default function CommentForm({ postId, onCommentAdded }) {
  const [content, setContent] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!content.trim() || !authorName.trim()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content.trim(),
          author_name: authorName.trim(),
          post_id: postId
        })
      })
      
      if (response.ok) {
        const newComment = await response.json()
        setContent('')
        setAuthorName('')
        onCommentAdded(newComment)
      } else {
        console.error('Failed to add comment')
      }
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Add a Comment</h3>
      
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="author"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="form-input"
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Comment
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-input min-h-[100px]"
          placeholder="Share your thoughts..."
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || !content.trim() || !authorName.trim()}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Adding Comment...' : 'Add Comment'}
      </button>
    </form>
  )
}
