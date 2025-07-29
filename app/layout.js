import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Blog Platform',
  description: 'Professional blog platform built with Next.js v13+ App Router and PostgreSQL',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">AI Blog Platform</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900">Login</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
            <p>Built with Next.js v13+ App Router, PostgreSQL, and AI assistance</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
