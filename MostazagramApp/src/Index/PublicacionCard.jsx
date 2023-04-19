import React from 'react'
import Pablo from '../assets/assets/img/Pablo.jpeg'

const PublicacionCard = () => {
  return (
    <div className='Publication'>
      <img src={Pablo} className='FotoP'></img>
      <div className='ButtonsMelos'>
        <button>Chat</button><br></br>
        <button>Comment</button><br></br>
        <button>Share</button>
      </div>
    </div>
  )
}

export default PublicacionCard