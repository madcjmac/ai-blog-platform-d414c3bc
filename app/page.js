import BlogPosts from './components/BlogPosts'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HeroSection />
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <BlogPosts />
      </div>
    </div>
  )
}
