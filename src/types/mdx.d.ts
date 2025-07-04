// src/types/mdx.d.ts
declare module '*.mdx' {
  import { ComponentType } from 'react'
  
  interface Frontmatter {
    title: string
    date: string
    description: string
    tags?: string[]
    author?: string
    image?: string
  }
  
  const MDXComponent: ComponentType
  export const frontmatter: Frontmatter
  export default MDXComponent
}

// Export the Frontmatter interface for use elsewhere
export interface Frontmatter {
  title: string
  date: string
  description: string
  tags?: string[]
  author?: string
  image?: string
}