import React from 'react'
import ComponenteItemHome from './ComponentesHover'
import ComponenteItemPublish from './ComponentesHover'
import ComponenteItemMessage from './ComponentesHover'
import ComponenteItemConfig from './ComponentesHover'
import ComponenteItemLogOut from './ComponentesHover'

const Hover = () => {
  return (
    <div>
      <ComponenteItemHome/>
      <ComponenteItemPublish/>
      <ComponenteItemMessage/>
      <ComponenteItemConfig/>
      <ComponenteItemLogOut/>
        <h1>Hover</h1>
    </div>
  )
}

export default Hover