import React, { useState } from 'react'
import PublicacionCard from './PublicacionCard'
import { useEffect } from 'react'
import { getPosts } from '../services/post.services'

const ContenedorPublicacionCard = () => {
  const [posts, setPosts] = useState([])
  const getDataDB = async ()=>{
    const res = await getPosts()
    console.log(res)
    setPosts(res)
  }
  useEffect(()=>{
    getDataDB()
  },[])
  return (
    <div>
        {posts?.map((post)=>{return(<PublicacionCard data={post} key={post._id} width="800" height="800"/>)})}
    </div>
  )
}

export default ContenedorPublicacionCard