import { NextResponse } from 'next/server'

// Mock authentication for demonstration
export async function POST(request) {
  try {
    const { email, password, action } = await request.json()
    
    if (action === 'login') {
      // In production, this would validate against PostgreSQL:
      // const user = await db.query('SELECT * FROM users WHERE email = $1', [email])
      // const isValidPassword = await bcrypt.compare(password, user.password_hash)
      
      if (email === 'demo@example.com' && password === 'demo123') {
        return NextResponse.json({
          success: true,
          user: {
            id: 1,
            email: 'demo@example.com',
            name: 'Demo User'
          },
          token: 'demo-jwt-token'
        })
      } else {
        return NextResponse.json(
          { success: false, error: 'Invalid credentials' },
          { status: 401 }
        )
      }
    }
    
    if (action === 'register') {
      // In production, this would insert into PostgreSQL:
      // const hashedPassword = await bcrypt.hash(password, 10)
      // const result = await db.query(
      //   'INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING id, email, name',
      //   [email, hashedPassword, name]
      // )
      
      return NextResponse.json({
        success: true,
        message: 'User created successfully',
        user: {
          id: 2,
          email,
          name: 'New User'
        }
      })
    }
    
    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
