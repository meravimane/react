import { RES_LOG_URL } from "../utils/constants";

export const Restaurant = (props) => {
    const {name, avgRating, cloudinaryImageId, costForTwo } = props.resData;

    return <div className="restaurant w-72 rounded-xl m-2 p-2 border-2 bg-gray-200 hover:bg-gray-400 shadow-sm">
        <img className="res-img w-[100%] rounded-xl h-96 " src= {RES_LOG_URL+cloudinaryImageId}></img>
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">Rating: {avgRating}</h4>
        <h4 className="res-for-two">{costForTwo}</h4>
    </div>
}