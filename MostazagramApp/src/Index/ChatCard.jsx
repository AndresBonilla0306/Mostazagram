import React from 'react'
import ChatPhoto from '../assets/assets/img/ChatPhoto.jpeg'

const ChatCard = () => {
  return (
    <div className='BtnChat'>
      <button className='BtnChatsito'>
        <img src={ChatPhoto}></img>
        <a>Name</a>
      </button>
    </div>
  )
}

export default ChatCard