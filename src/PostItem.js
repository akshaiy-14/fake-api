import React from 'react'

const PostItem = ( {post} ) => {
  return (
    <>
        <li key={post.id}> {post.title} </li>
    </>
  )
}

export default PostItem