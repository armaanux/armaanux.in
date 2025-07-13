import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface BlogPostProps {
  children: React.ReactNode
  frontmatter: {
    title: string
    date: string
    description: string
    author?: string
    tags?: string[]
  }
}

export const BlogPost: React.FC<BlogPostProps> = ({ children, frontmatter }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back to blog button */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-gray-200 hover:text-gray-300 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-200">{frontmatter.title}</h1>
            <div className="flex items-center gap-4 text-gray-200 mb-4">
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {frontmatter.author && <span>by {frontmatter.author}</span>}
            </div>
            {frontmatter.tags && (
              <div className="flex gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </article>
      </div>
    </div>
  )
}