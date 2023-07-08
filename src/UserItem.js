import React from 'react'

const UserItem = ( {user} ) => {
  return (
    <>
        <li key={user.id}> {user.name} lives in {user.address.city} </li>
    </>
  )
}

export default UserItem