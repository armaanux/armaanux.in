// src/utils/blog.ts
import type { Frontmatter } from '@/types/mdx'

export interface BlogPost extends Frontmatter {
  slug: string
}

// Dynamically import all MDX files from the content directory
const blogModules = import.meta.glob('@/content/*.mdx', { eager: true }) as Record<
  string,
  { frontmatter: Frontmatter }
>

// Generate blog posts array from MDX files
export const blogPosts: BlogPost[] = Object.entries(blogModules).map(
  ([filePath, module]) => {
    const slug = filePath
      .split('/')
      .pop()!
      .replace(/\.mdx$/, '')
    
    return {
      slug,
      ...module.frontmatter
    }
  }
)

// Utility functions
export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getAllBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags?.includes(tag))
}