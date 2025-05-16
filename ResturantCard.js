
const ResturantCard = ({ data }) => {
    const ImagURL='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
    const {avgRating,areaName,name,sla , id, cloudinaryImageId} = data.info 
    return (<>
        <div className='resturnat' >
             <img className='res-img' alt='pngtree' src={ImagURL+cloudinaryImageId} />
             <h2>{name}t</h2>
             <h3>{areaName} </h3>
           <h4>{avgRating}</h4>
            <h5>{sla.slaString}</h5>
            {/* <h6>{cuisines}</h6> */}
     </div></>)
}
 export default ResturantCard