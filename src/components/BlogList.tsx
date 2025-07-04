import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Tag, User } from 'lucide-react'
import { BlogPost } from '../lib/blog'

interface BlogListProps {
  posts: BlogPost[]
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
       
          <div className="flex-col justify-center items-center gap-6 flex pb-10">
                <div className="font-first text-xl md:text-4xl bg-gradient-to-r bg-clip-text  text-transparent 
            from-[#FFFFFF]  via-[#CACACA] to-[#FFFFFF]
            animate-text tracking-tight">Blogs</div>
                <div className="text-[#B3B3B3] text-lg text-center">
                    Just me thinking out loud ~ in blog form.
                </div>
            </div>
        

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-lg p-6 transition-shadow">
              <Link to={`/blogs/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold mb-3 text-gray-200 group-hover:text-[#ADFF2F] transition-colors">
                  {post.title}
                </h2>
                
                <div className="flex items-center gap-4 text-gray-200 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-200 mb-4 text-lg leading-relaxed">
                  {post.description}
                </p>
                
                {post.tags && (
                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-gray-200" />
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-200 text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}