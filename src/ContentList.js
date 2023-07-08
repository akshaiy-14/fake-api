import React from 'react'
import CommentItem from './CommentItem'
import PostItem from './PostItem'
import UserItem from './UserItem'

const ContentList = ( {p,c,u,posts,comments,users} ) => {
  return (
    <>
        {p && <table className='table-styles'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
            {p && posts.map(post => { 
                return (
                    <PostItem post={post} />
                )
            })}
            </tbody>
        </table>}

        {c && <table className='table-styles'>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
            {c && comments.map(comment => { 
                return (
                    <CommentItem comment={comment}/>
                )
            })}
            </tbody>
        </table>}

        {u && <table className='table-styles'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
            {u && users.map(user => { 
                return (
                    <UserItem user={user} />
                )
            })}
            </tbody>
        </table>}
    </>
  )
}

export default ContentList