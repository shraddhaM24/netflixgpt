const RestaurantCard = (props) => {
  const {resData} = props;
  const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime} = resData;
  return (
    <div className='card-list w-[12vw] mx-2 my-2 bg-slate-200'>
      <div>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
      </div>
      <div className="pro-details px-4 py-4">
        <div>
          <span className="text-base font-bold line-clamp-1">{name}</span>
        </div>
        <div className="rating flex items-baseline">
          <svg class="w-4 h-4 me-1 text-green-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
          <span>{avgRating}</span>
        </div>
        <div>
          <span>{deliveryTime}</span>
        </div>
        <div className="cuisines-name line-clamp-1">
          <span>{cuisines.join(", ")}</span>
        </div>
      </div>
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