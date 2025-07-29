import { NextResponse } from 'next/server'

// Mock data for demonstration (in production, this would connect to PostgreSQL)
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js v13 App Router",
    content: "The new App Router in Next.js v13 brings powerful features like server components, nested layouts, and improved performance. In this comprehensive guide, we'll explore how to build modern web applications with the latest Next.js features. From setting up your first app to deploying to production, we'll cover everything you need to know to get started with this game-changing framework.",
    author_name: "Tech Writer",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    comment_count: 5
  },
  {
    id: 2,
    title: "Building Full-Stack Applications with PostgreSQL",
    content: "PostgreSQL is a powerful, open-source relational database that's perfect for modern web applications. Learn how to design schemas, optimize queries, and integrate with your Next.js applications. We'll cover everything from basic CRUD operations to advanced features like indexing, transactions, and performance optimization.",
    author_name: "Database Expert",
    created_at: new Date(Date.now() - 172800000).toISOString(),
    comment_count: 12
  },
  {
    id: 3,
    title: "AI-Powered Development: The Future is Here",
    content: "Artificial Intelligence is revolutionizing software development. From code generation to automated testing, AI tools are making developers more productive than ever. Discover the latest AI development tools, learn how to integrate them into your workflow, and see real examples of AI-generated applications in action.",
    author_name: "AI Researcher",
    created_at: new Date(Date.now() - 259200000).toISOString(),
    comment_count: 8
  },
  {
    id: 4,
    title: "Tailwind CSS: Styling Made Simple",
    content: "Tailwind CSS has transformed how we approach styling web applications. With its utility-first approach, you can build beautiful, responsive designs faster than ever. Learn the core concepts, best practices, and advanced techniques that will make you a Tailwind CSS expert.",
    author_name: "UI/UX Designer",
    created_at: new Date(Date.now() - 345600000).toISOString(),
    comment_count: 15
  },
  {
    id: 5,
    title: "Deploying to Production: Best Practices",
    content: "Deploying your application to production involves more than just pushing code. Learn about environment configuration, database migrations, monitoring, and performance optimization. We'll cover deployment strategies for platforms like Render, Vercel, and AWS.",
    author_name: "DevOps Engineer",
    created_at: new Date(Date.now() - 432000000).toISOString(),
    comment_count: 7
  },
  {
    id: 6,
    title: "React Server Components: A Deep Dive",
    content: "React Server Components represent a paradigm shift in how we build React applications. By moving computation to the server, we can create faster, more efficient applications with better SEO and performance. Explore the benefits, learn the patterns, and see practical examples.",
    author_name: "React Maintainer",
    created_at: new Date(Date.now() - 518400000).toISOString(),
    comment_count: 20
  }
]

export async function GET() {
  try {
    // In production, this would query PostgreSQL:
    // const posts = await db.query('SELECT * FROM posts ORDER BY created_at DESC')
    
    return NextResponse.json({
      success: true,
      posts: mockPosts
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const { title, content, author_name } = await request.json()
    
    // In production, this would insert into PostgreSQL:
    // const result = await db.query(
    //   'INSERT INTO posts (title, content, author_name) VALUES ($1, $2, $3) RETURNING *',
    //   [title, content, author_name]
    // )
    
    const newPost = {
      id: mockPosts.length + 1,
      title,
      content,
      author_name,
      created_at: new Date().toISOString(),
      comment_count: 0
    }
    
    mockPosts.unshift(newPost)
    
    return NextResponse.json({
      success: true,
      post: newPost
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
