import { useState } from "react"
import { restaurantList } from "../utils/restaurentList"
import { Restaurant } from "./Restaurant"

export const Body = () => {

    const [restaurants, setRestaurants]=useState(restaurantList);

    const sortTopRatedRestaurants = () => {
        const restaurantList = restaurants.filter(restaurant => (restaurant.info.avgRating > 4.2))
        setRestaurants(restaurantList)
    }

    return <div className="body">
        <div className="search">
            <button className="filter-btn" onClick={()=> sortTopRatedRestaurants()}>Top Rated Restaurant </button>
        </div>
        <div className="res-list">
            {restaurants.map(restaurant => (
                <Restaurant key={restaurant.info.id} resData={restaurant.info}/>
            ))}
        </div>
    </div>
}