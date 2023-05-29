// import React, { useState, useEffect } from 'react';

// const CardComment = ({data}) => {
//   const [comment, setComment] = useState([]);
//   const [user, setUser] = useState('')
//   const [post, setPost] = useState('')
//   console.log(data)
//   return (
//     <div className='texto'>
//       {/* <h1>{data.comment[0].user[0].user}:</h1> */}
//       <h1>{data.comment?.map((com)=>{ return com.user.user})}:</h1>
//         <h3>{data.comment?.map((com)=>{ return com.comment})}</h3>
        
//     </div>
//   )
// }

// export default CardComment;
import React, { useState, useEffect } from 'react';

const CardComment = ({ data }) => {
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState('');
  const [post, setPost] = useState('');

  return (
    <div className='texto'>
      {data.comment?.map((com) => (
        <React.Fragment key={com._id}>
          <h1>{com.user.user}:</h1>
          <h3>{com.comment}</h3>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardComment;

