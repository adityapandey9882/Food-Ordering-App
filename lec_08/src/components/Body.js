import RestaurantCart from "./RestaurantCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // (useState) Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
    }, []);
    

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  
    );
  
    const json = await data.json();
    console.log(json);

    // optional chaining 
    const restaurant = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    
    setlistOfRestaurants(restaurant);
    setFilterRestaurant(restaurant);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection
      </h1>
    )

  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={ () => {
            // Filter the restaurant cards and update the UI 
            // SearchText
            // console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText)
              );

              setFilterRestaurant(filteredRestaurant);
          }}>Search </button>
        </div>
        <button className="filter-btn" 
        onClick={() =>{
          // filter logic here 
        const filtered = listOfRestaurants.filter(
          (res)=> res.info.avgRating > 4
      );
        setFilterRestaurant(filtered);
        }}
        >
          Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <Link 
           key={restaurant.info.id} 
           to={"/restaurants/"+ restaurant.info.id}><RestaurantCart  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

  export default Body






