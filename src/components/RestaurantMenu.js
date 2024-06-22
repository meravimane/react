import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => { 
    const { resId } = useParams();
    const [resData, setResData] = useState(null);

    useEffect(() =>{
        getMenu();
    }, [])

    async function getMenu() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId='+ resId);
        const jsonData = await data.json();
        setResData(jsonData)
    }

    const menu = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(menu);
    const name = resData?.data.cards[0]?.card?.card?.text;

    return (
        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {menu?.map((item) => <li>{item.card.info.name} - Rs {item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;