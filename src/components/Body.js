import { useEffect, useState } from "react"
import { Restaurant } from "./Restaurant"
import { Link } from "react-router-dom";
export const Body = () => {
    const [restaurants, setRestaurants]=useState([]);
    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [searchText, setSearchText]=useState("");

    useEffect(() => {
        getRestaurants();
    },[]);

    const getRestaurants = async function () {
        const restaurantList =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json  = await restaurantList.json();
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const sortTopRatedRestaurants = () => {
        const restaurantList = restaurants.filter(restaurant => (restaurant.info.avgRating > 4.2))
        setRestaurants(restaurantList)
    }

    const searchRestaurants = (value) => {
        setSearchText(value);
        if(value == '') {
            setRestaurants(listOfRestaurants)
        }
        const restaurantList = listOfRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(value.toLowerCase()));
        setRestaurants(restaurantList)
    }

    return listOfRestaurants.length? <div className="body">
        <div className="search flex p-3 justify-between">
            <div>
                <input className="border-2 rounded-lg p-2" value={searchText} onChange={(e)=> searchRestaurants(e.target.value)} placeholder="Search restaurant"/>
            </div>
            <button className="filter-btn border-2 rounded-lg p-2" onClick={()=> sortTopRatedRestaurants()}>Top Rated Restaurant </button>
        </div>
        <div className="res-list flex flex-wrap m-2 justify-center border-2 shadow-sm">
            {restaurants.map(restaurant => (
                <Link to={/restaurants/+ restaurant.info.id}><Restaurant key={restaurant.info.id} resData={restaurant.info}/></Link>
            ))}
        </div>
    </div> : <div>Loading...</div>
}