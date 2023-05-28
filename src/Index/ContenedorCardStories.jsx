import React, { useState } from 'react'
import CardStories from './CardStories'
import { useEffect } from 'react';
import { getStorys } from '../services/post.services';

const ContenedorCardStories = () => {
  const [storys, setStory] = useState([])
  const getDataDB = async ()=>{
    const res = await getStorys()
    console.log(res)
    setStory(res)
  }
  useEffect(()=>{
    getDataDB()
  },[])
  return (
    <div>
        {storys?.map((story)=>{return(<CardStories data={story} key={story._id} />)})}
    </div>
  )
}

export default ContenedorCardStories