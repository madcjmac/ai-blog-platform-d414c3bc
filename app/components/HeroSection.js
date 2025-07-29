export default function HeroSection() {
  return (
    <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to AI Blog Platform
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Discover amazing content, share your thoughts, and connect with writers from around the world. 
        Built with cutting-edge technology and AI assistance.
      </p>
      <div className="space-x-4">
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200">
          Start Reading
        </button>
        <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
          Write Your First Post
        </button>
      </div>
    </div>
  )
}
