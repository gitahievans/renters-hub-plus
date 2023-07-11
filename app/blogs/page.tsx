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
    <div className='h-[500px] bg-slate-100'>Blog</div>
  )
}

export default Blog;