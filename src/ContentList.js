import React from 'react'
import CommentItem from './CommentItem'
import PostItem from './PostItem'
import UserItem from './UserItem'

const ContentList = ( {p,c,u,posts,comments,users} ) => {
  return (
    <>
        <ul>
            {p && posts.map(post => { 
                return (
                 <PostItem post={post}/>
                )
            })}
        </ul>
        <ul>
            {c && comments.map(comment => { 
                return (
                 <CommentItem comment={comment}/>
                )
            })}
        </ul>
        <ul>
        {u && users.map(user => { 
            return (
              <UserItem user={user} />
            )
          })}
        </ul>
    </>
  )
}

export default ContentList