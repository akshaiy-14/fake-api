import React from 'react'

const CommentItem = ( {comment} ) => {
  return (
    <tr>
        <td> {comment.email}  </td>
        <td> {comment.body} </td>
    </tr>
  )
}

export default CommentItem