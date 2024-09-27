import RestaurantCard,{withPromotedLabel} from './RestaurantCard';
import { useState, useEffect } from 'react';
// import RestList from './RestList';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardVeg = withPromotedLabel(RestaurantCard);

  useEffect(() =>{
    fetchData();
  } , []);


  const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1894674&lng=72.8533941&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        //optional chaning
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline! Please check internet connection</h1>

  return (
    <div className='Body px-9'>
        <div className='filter flex my-10'>
            <div className='search'>
                <input type="text" className='search-box px-3 py-1 border-2 border-black border-solid ' value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className='px-3 py-1 bg-slate-200 border-slate-200 mr-4 font-semibold border-2
                                    hover:bg-slate-400 active:bg-slate-400
                ' 
                    onClick={() => {
                    const filterRestaurants = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filterRestaurants);
                }}><span className='font-semibold capitalize'>search</span></button>
            </div>
            <button className='btn-filter bg-slate-200 border-slate-200 hover:bg-slate-400 active:bg-slate-400 px-3 py-1 font-semibold border-2 capitalize'
                onClick={
                    () =>{
                        const filterList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.6
                        );
                        setListOfRestaurants(filterList);
                    }
                }>
                Top Rated Restaurants
            </button>
        </div>
        <div className='red-card flex flex-wrap justify-around'>
        {
            filteredRestaurant.map((restaurant) => (
                <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info.id}>
                    {
                        restaurant?.info?.veg ? ( <RestaurantCardVeg  resData={restaurant?.info} />) : ( <RestaurantCard  resData={restaurant?.info} />)
                    }
                </Link>
            ))
        }
        </div>
    </div>
  )
}

export default Body;