import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-neutral-300">
      <h1 className="text-6xl font-bold text-purple-500">404</h1>
      <p className="mt-4 text-lg text-neutral-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 text-lg font-semibold from-purple-500 border border-purple-300 rounded-lg hover:bg-purple-300 hover:text-neutral-900 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
