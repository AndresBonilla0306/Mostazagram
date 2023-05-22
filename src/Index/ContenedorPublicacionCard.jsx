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
    // console.log(getPosts())
    getDataDB()
    // setPosts(getPosts())
  },[])
  return (
    <div>
        {posts?.map((post)=>{return(<PublicacionCard data={post} key={post._id}/>)})}
    </div>
  )
}

export default ContenedorPublicacionCard