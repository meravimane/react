import { restaurantList } from "../utils/restaurentList"
import { Restaurant } from "./Restaurant"

export const Body = () => {
    return <div className="body">
        <div className="search">Search field</div>
        <div className="res-list">
            {restaurantList.map(restaurant => (
                <Restaurant key={restaurant.info.id} resData={restaurant.info}/>
            ))}
        </div>
    </div>
}