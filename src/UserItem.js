import React from 'react'

const UserItem = ( {user} ) => {
  return (
    <tr>
        <td> {user.name}  </td>
        <td> {user.address.city} </td>
    </tr>
  )
}

export default UserItem