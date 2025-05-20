import React,{useEffect} from 'react'
import {ImageURL} from './constant'
const MenuCards = ({ data }) => {
    // const {name} = data
    // let  datas
    // for (let i=0; i <= data?.length; i++){
    //     datas = data[i].map(item => item.info.name)
    // }
    console.log(data)

    return (<>
   
        {data?.map((item, index) => (
          <div key={index} className='menu-card'>
          <div>
          <h3>{item?.card?.info?.name}</h3>
         {/* <h4>{parseInt(item?.card?.info?.defaultPrice) / 100}</h4> */}
          <h5>{item?.card?.info?.ratings.aggregatedRating.ratingCount}</h5>
          <p>{item?.card?.info?.description}</p>
          </div>
          <div>
                    <img className='menu-image' src={ImageURL+item?.card?.info?.imageId } />
          </div>
        </div>
      ) )}
      
        </>
  )
}

export default MenuCards