import React from 'react'

export async function generateMetadata({ params }: {
  params: { id: string }
}) {
  return {
    title: 'RentersHub blogs',
  };
}
const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog;