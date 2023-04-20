import React from 'react'
import Nunez from '../assets/assets/img/Nunez.jpeg'

const CardProfileStory = () => {
  return (
    <div className='StoriesContainer'>
      <button> 
        <img src={Nunez} className='FotoStory'></img>
      </button>
    </div>
  )
}

export default CardProfileStory