import React from 'react'
import ComponenteItemHome from './ComponentesHover/ComponentItemHome'
import ComponenteItemPublish from './ComponentesHover/ComponenteItemPublish'
import ComponenteItemMessage from './ComponentesHover/ComponenteItemMessage'
import ComponenteItemConfig from './ComponentesHover/ComponenteItemConfig'
import ComponenteItemLogOut from './ComponentesHover/ComponenteItemLogOut'

const Hover = () => {
  return (
    <div className='MenuV'>
      <ComponenteItemHome/>
      <ComponenteItemPublish/>
      <ComponenteItemMessage/>
      <ComponenteItemLogOut/>
    </div>
  )
}

export default Hover