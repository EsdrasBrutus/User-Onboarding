import React from 'react'
import Card from '../conponents/Card'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your User&apos;s details...</h3>
  }

  return (
    <Card>
      <div className='user container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
    </div>
    </Card>
 
  )
}

export default User
