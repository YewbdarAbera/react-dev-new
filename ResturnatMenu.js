import React,{useState,useEffect} from 'react'
import MenuCards from './MenuCards'
import { DATA_URL } from './utils/constant'
import { useParams } from 'react-router-dom'
const ResturnatMenu = () => {
    const [data, setData] = useState()
    const { restId } = useParams()
    console.log(restId)
    
    const fetchData = async () => {
        console.log('called data feached ')
        try {
            const res = await fetch(DATA_URL+restId)
            const dataJson = await res.json()
            setData(dataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
            console.log(dataJson.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
  return (
      <div className='resturnat-menu'>
          <h3>Recommended</h3>
          <MenuCards data={data} />
      </div>
  )
}

export default ResturnatMenu