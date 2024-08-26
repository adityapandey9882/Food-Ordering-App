const RestaurantCategory = ({ data })=> {
    console.log(data)
    return <div>
        {/* Header */}
        <div className="w-6/12 m-auto mx-auto my-4 bg-gray-200 shadow-lg p-4 flex justify-between">
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        {/* Accordion Body */}
    </div>
}
export default RestaurantCategory