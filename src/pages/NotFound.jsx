import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-primary-950 px-4 text-center text-white">
      <p className="font-serif text-8xl font-bold text-accent-400">404</p>
      <h1 className="mt-4 font-serif text-3xl font-bold">Page Not Found</h1>
      <p className="mt-3 max-w-md text-white/70">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <HomeIcon size={16} /> Back to Home
      </Link>
    </section>
  )
}
