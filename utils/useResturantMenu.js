import { useState, useEffect } from "react"
import { DATA_URL } from './constant'
const useResturantMenu = (restId) => {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
        try {
            const respon = await fetch(DATA_URL + restId)
            const json = await respon.json()
            setData(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        } catch (error) {
            console.log(error)
        }
        }
        fetchData()
    })
    return data 
}
export default useResturantMenu