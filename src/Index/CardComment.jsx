import React, { useState, useEffect } from 'react';

const CardComment = ({ data }) => {
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState('');
  const [post, setPost] = useState('');
  console.log(data)
  return (
    <div className='texto'>
      {data.comment?.map((com) => (
        <React.Fragment key={com._id}>
          <h1 className='CommentUser'>{com.user.user}: {com.comment}</h1>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardComment;

