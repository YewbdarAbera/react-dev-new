import React from 'react'
import MenuCards from './MenuCards'
import { useParams } from 'react-router-dom'
import useResturantMenu from './utils/useResturantMenu'
const ResturnatMenu = () => {
    const { restId } = useParams()
    const data = useResturantMenu(restId)
  return (
      <div className='resturnat-menu'>
          <h3>Recommended</h3>
          <MenuCards data={data} />
      </div>
  )
}

export default ResturnatMenu