import { NextResponse } from 'next/server'

// Mock data for demonstration
const mockComments = [
  {
    id: 1,
    content: "Great article! Really helpful for understanding the new App Router.",
    author_name: "Developer123",
    post_id: 1,
    created_at: new Date(Date.now() - 43200000).toISOString(),
  },
  {
    id: 2,
    content: "Thanks for the detailed explanation. Looking forward to trying this out.",
    author_name: "ReactFan",
    post_id: 1,
    created_at: new Date(Date.now() - 21600000).toISOString(),
  }
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('post_id')
    
    let comments = mockComments
    if (postId) {
      comments = mockComments.filter(c => c.post_id === parseInt(postId))
    }
    
    // In production, this would query PostgreSQL:
    // const comments = await db.query(
    //   'SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at DESC',
    //   [postId]
    // )
    
    return NextResponse.json({
      success: true,
      comments: comments
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const { content, author_name, post_id } = await request.json()
    
    // In production, this would insert into PostgreSQL:
    // const result = await db.query(
    //   'INSERT INTO comments (content, author_name, post_id) VALUES ($1, $2, $3) RETURNING *',
    //   [content, author_name, post_id]
    // )
    
    const newComment = {
      id: mockComments.length + 1,
      content,
      author_name,
      post_id: parseInt(post_id),
      created_at: new Date().toISOString()
    }
    
    mockComments.push(newComment)
    
    return NextResponse.json({
      success: true,
      comment: newComment
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create comment' },
      { status: 500 }
    )
  }
}
