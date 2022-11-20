function RatingButton({ ratingValue, handleSelect, selected }) {
    return (
        <>
            <label
                htmlFor={`rating-${ratingValue}`}
                className={selected == ratingValue ? "selected" : ""}>
                <input
                    type="radio"
                    name="rating"
                    id={`rating-${ratingValue}`}
                    onClick={() => handleSelect(ratingValue)}
                />
                <span>{ratingValue}</span>
            </label>
        </>
    );
}

export default RatingButton;
