import React from 'react'
import userimg from '../Images/user.png'

import './Header.css'
function Header({user}) {
  return (
    <header className='header_component'>
    <div className='header_text'>
        <p>Total Contacts</p>
    </div>
    <div className='second_cont'>
        <div className='search_container'>
            <p><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="17.49px" height="17.49px" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg></p>
                <input type="text" placeholder='Search by Email Id.....' />
        </div>
        <div className='user_container'>
            <h1><img src={userimg} alt="" /></h1>
            <div className='user_detail'>
                <p>{user?user.split('@')[0].toUpperCase():" Ram Darvin"}</p>
                <p>Super Admin</p>
            </div>
        </div>

    </div>
</header>
    
  )
}

export default Header