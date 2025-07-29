import { NextResponse } from 'next/server'

// Mock data for demonstration
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js v13 App Router",
    content: "The new App Router in Next.js v13 brings powerful features like server components, nested layouts, and improved performance. In this comprehensive guide, we'll explore how to build modern web applications with the latest Next.js features.",
    author_name: "Tech Writer",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  }
]

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    
    // In production, this would query PostgreSQL:
    // const post = await db.query('SELECT * FROM posts WHERE id = $1', [id])
    
    const post = mockPosts.find(p => p.id === id)
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      post: post
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    const { title, content } = await request.json()
    
    // In production, this would update PostgreSQL:
    // const result = await db.query(
    //   'UPDATE posts SET title = $1, content = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
    //   [title, content, id]
    // )
    
    const postIndex = mockPosts.findIndex(p => p.id === id)
    if (postIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      )
    }
    
    mockPosts[postIndex] = {
      ...mockPosts[postIndex],
      title,
      content,
      updated_at: new Date().toISOString()
    }
    
    return NextResponse.json({
      success: true,
      post: mockPosts[postIndex]
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)
    
    // In production, this would delete from PostgreSQL:
    // const result = await db.query('DELETE FROM posts WHERE id = $1', [id])
    
    const postIndex = mockPosts.findIndex(p => p.id === id)
    if (postIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      )
    }
    
    mockPosts.splice(postIndex, 1)
    
    return NextResponse.json({
      success: true,
      message: 'Post deleted successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
