import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400s" alt="" />
        <span>User</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar