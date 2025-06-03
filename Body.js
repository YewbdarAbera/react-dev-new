import ResturantCard from "./ResturantCard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from './utils/useOnlineStatus'
const Body = () => {
    const [resturantList, setResturantList] = useState([])
    const [filteredResturantList, setfilteredResturantList] = useState([])
    const [serchKey, setSerchKey] = useState()
    const onlineStatus = useOnlineStatus()
    const fetchData = async() => {
        try {
            let response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            let data = await response.json()
            setResturantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setfilteredResturantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch(error) {
                console.log(error)
        }
    }
    useEffect(()=> {
        fetchData()
    },[])
    const serchButton = () => {
        console.log(serchKey , resturantList?.info)
        let filteredRes = resturantList?.filter((res) => res?.info?.name.toLowerCase().includes(serchKey.toLowerCase()))
        setfilteredResturantList(filteredRes)
        
    }
    if(onlineStatus === false) return <h1>you are offline , please check your network connection  </h1>
    return (<>

        <section className='body'>
            <div className="search">
                <input type="text" value={serchKey}
                    placeholder="search" onChange={(e)=>setSerchKey(e.target.value)}/>
                <button onClick={serchButton}>Search</button>
            </div>
            <div className='res-container'>
                {filteredResturantList?.map(rest => <Link className="rest-link" key={rest.info.id} to={'/resturant/'+rest.info.id}><ResturantCard  data={rest} /></Link> )}
                
            </div>
        </section>
        </>
    )
}
export default Body