import React from 'react'
import CardImagenP from './CardImagenP'

const ContenedorCardImagenP = ({data}) => {
  console.log(data)
  return (
    <div className='ContainerAgregadas'>
      {data?.map((posts)=>{return <CardImagenP data={posts}/>})}
    </div>
  )
}

export default ContenedorCardImagenP