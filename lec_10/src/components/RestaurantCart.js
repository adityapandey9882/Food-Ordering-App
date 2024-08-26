import { CDN_URL } from "../utils/constants";

const RestaurantCart= (props) => {
  const { resData } = props;
  // console.log(props);

  const {name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwo,
        cloudinaryImageId,
        locality
      } = resData?.info;
  return (
      <div className="m-3 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img 
          className="rounded-lg" 
          alt="res-logo" 
          src={CDN_URL + cloudinaryImageId}
        /> 
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} 29 minutes</h4>
          <h4>{costForTwo}</h4>
          <h5>{locality}</h5>                
      </div>
  );
  };

  export default RestaurantCart