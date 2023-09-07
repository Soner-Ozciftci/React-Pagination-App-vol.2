import React from 'react'
import User from './user'

function users({users,page}) {
    const startIndex = (page - 1) * 10;
    const selectedUsers = users.slice(startIndex, startIndex + 10)
  return (
    <div>users</div>
  )
}

export default users