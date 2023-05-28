import React from 'react';
import CardComment from './CardComment';

const ContendorCardComment = ({ fetchComment }) => {
  return (
    <div>
      <CardComment fetchComment={fetchComment} />
    </div>
  )
}

export default ContendorCardComment;
