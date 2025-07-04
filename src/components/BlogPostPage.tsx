import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { BlogPost } from '@/components/BlogPost'
import { getBlogPost } from '@/lib/blog'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  
  // Dynamically import the MDX component based on slug
  const PostComponent = React.lazy(() => {
    try {
      return import(`@/content/${slug}.mdx`)
    } catch (error) {
      // Return a dummy component if import fails
      return Promise.resolve({
        default: () => null
      })
    }
  })

  if (!slug) {
    return <NotFound />
  }

  const postMeta = getBlogPost(slug)

  if (!postMeta) {
    return <NotFound slug={slug} />
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogPost frontmatter={postMeta}>
        <PostComponent />
      </BlogPost>
    </Suspense>
  )
}

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="min-h-screen">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200/95 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200/95 rounded w-1/2 mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200/95 rounded"></div>
          <div className="h-4 bg-gray-200/95 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200/95 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
)

// Not found component
const NotFound = ({ slug }: { slug?: string }) => (
  <div className="min-h-screen">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        to="/blogs" 
        className="inline-flex items-center gap-2 text-gray-200 hover:text-gray-300 mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>
      <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
      <p className="text-gray-200">
        {slug ? `The requested blog post "${slug}" could not be found.` : 'No blog post specified.'}
      </p>
    </div>
  </div>
)

export default BlogPostPage