import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { DATA_URL } from "../utils/constants";


const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu= async () =>{
        const data = await fetch( DATA_URL +resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    };

    if(resInfo === null) return <Shimmer/>
    
    const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
    <div className="menu">
        
        <h1>{name}</h1>
        <p>
            {cuisines} - {costForTwoMessage}
        </p>
        
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                    {item.card.info.price/100}
                </li>
            ))}
        </ul>
    </div>
    );
};

export default RestaurantMenu;