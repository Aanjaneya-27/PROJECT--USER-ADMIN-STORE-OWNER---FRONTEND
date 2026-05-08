function RatingButtons({handleRating, storeId}) {
    return (

        <div className="flex gap-2 mt-4">
 {
                [1,2,3,4,5].map((star) => (

                    <button key={star} onClick={() => handleRating(storeId, star)} className="bg-yellow-400 px-3 py-1 rounded" >
                        {star}
                    </button>
                ))
            }

        </div>
    )
}

export default RatingButtons;