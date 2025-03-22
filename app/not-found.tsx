import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#191919]">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl text-gray-300">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-lg font-medium text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <span className="mr-2">←</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}