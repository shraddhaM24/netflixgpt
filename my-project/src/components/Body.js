import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
// import RestList from './RestList';
import Shimmer from './Shimmer';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() =>{
    fetchData();
  } , []);


  const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        //optional chaning
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className='Body'>
        <div className='filter'>
            <div className='search'>
                <input type="text" className='search-box' value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
                    const filterRestaurants = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filterRestaurants);
                }}>search</button>
            </div>
            <button className='btn-filter'
                onClick={
                    () =>{
                        const filterList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4.0
                        );
                        setListOfRestaurants(filterList);
                    }
                }>
                Top Rated Restaurants
            </button>
        </div>
        <div className='red-card'>
        {
            filteredRestaurant.map((restaurant) => (
            <RestaurantCard  key ={restaurant.id} resData = {restaurant} />
            ))
        }
        </div>
    </div>
  )
}

export default Body;