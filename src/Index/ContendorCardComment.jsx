import React, { useState } from 'react'
import { useEffect } from 'react'
import { getCommetns } from '../services/post.services'
import { getPosts} from '../services/post.services';
import CardComment from './CardComment';
import { getToken } from '../helpers/localStorage';
import { extractUser } from '../helpers/jwt';
import { createComments, getPostsId } from '../services/post.services';


const ContendorCardComment = ({data: datas}) => {
  const [cComment, setcComment] = useState('')
  
  const handleCommentChange = (event) => {
    setcComment(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {uid} = await extractUser(getToken());
      const idPost = datas._id
      // console.log(idPost)
      // console.log(uid)
      // console.log(cComment)
      const res = await createComments( cComment, uid, idPost);
      // toast.info('Update exitoso, disfruta')
      // navigate('/')
      console.log('Registro exitoso:', res.data);
    } catch (error) {
      console.error('Error al Update:', error.response.data);
      // toast.error('Error al Update: ' + error.response.data.errors.msg);
    }
  };
  
  return (
    <div>
      {/* {datas.comment?.map((comment)=>{return(<CardComment  data={datas} key={comment._id}/>)})} */}
      <CardComment data={datas}/>
      <form className='ContenedorCommentario' onSubmit={handleSubmit}>
        <input type="text" className='BarComment' value={cComment} onChange={handleCommentChange}/> 
        <button className='BarSend'>Push</button>
      </form> 
    </div>
    
  )
}

export default ContendorCardComment;