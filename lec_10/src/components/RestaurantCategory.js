import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 m-auto mx-auto my-4 bg-gray-200 shadow-lg p-4">
        <div className="flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>

        <ItemList items={data.itemCards} />
      </div>
      
    </div>
  );
};
export default RestaurantCategory;
