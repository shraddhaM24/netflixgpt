const RestaurantCard = (props) => {
  const {resData} = props;
  const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime} = resData.info;
  return (
    <div className='card-list'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
      <h5>{name}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{deliveryTime}</h5>
      <h5>{avgRating}</h5>
    </div>
  )
}

// Destructuring Props

// const RestaurantCard = ({resName,cui}) => {
//   return (
//     <div>{resName}</div>
//   )
// }

export default RestaurantCard;