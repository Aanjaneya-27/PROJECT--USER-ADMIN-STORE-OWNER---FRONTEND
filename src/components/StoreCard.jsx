import Rating from "./Rating";

function StoreCard({store, handleRating}) {

    return (

        <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-semibold mb-2">
                {store.name}
            </h2>

            <p className="text-gray-600 mb-2">
                {store.address}
            </p>

            <p className="mb-2">
                 Overall Rating:
                {" "}
                {store.average_rating || "No Rating"}
            </p>

            <p className="mb-2">
                Your Rating:
                {" "}
                {store.user_rating || "Not Rated"}
            </p>

            <Rating
                handleRating={handleRating}
                storeId={store.id}
            />

        </div>
    )
}

export default StoreCard;