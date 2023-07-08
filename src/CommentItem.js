import React from 'react'

const CommentItem = ( {comment} ) => {
  return (
    <>
        <li key={comment.id}> {comment.body} </li>
    </>
  )
}

export default CommentItem