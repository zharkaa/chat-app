import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="userChatInfo">
          <span>User2</span>
        </div>
      </div>
    </div>
  )
}

export default Search