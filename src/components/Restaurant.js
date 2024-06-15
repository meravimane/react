import { RES_LOG_URL } from "../utils/constants";

export const Restaurant = (props) => {
    const {name, avgRating, cloudinaryImageId, costForTwo } = props.resData;

    return <div className="restaurant">
        <img className="res-img" src= {RES_LOG_URL+cloudinaryImageId}></img>
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">Rating: {avgRating}</h4>
        <h4 className="res-for-two">{costForTwo}</h4>
    </div>
}