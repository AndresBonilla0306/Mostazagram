import React from 'react';
import CardComment from './CardComment';

const ContendorCardComment = ({ fetchComment }) => {
  return (
    <div>
      <CardComment fetchComment={fetchComment} />
      {/* <button>Editar</button>
      <button>Borrar</button> */}
    </div>
  )
}

export default ContendorCardComment;
