function RatingButton({ ratingValue, handleSelect, selected }) {
    return (
        <>
            <label
                htmlFor={`rating-${ratingValue}`}
                className={`${
                    selected == ratingValue ? "selected" : "hover:bg-slate-500 "
                } flex items-center justify-center bg-slate-800 rounded-full group transition-colors delay-75`}>
                <span className="absolute text-slate-400 font-semibold group-hover:text-white transition-colors delay-75">
                    {ratingValue}
                </span>
                <input
                    type="radio"
                    name="rating"
                    id={`rating-${ratingValue}`}
                    onClick={() => handleSelect(ratingValue)}
                    className="w-12 h-12 hover:cursor-pointer z-50 opacity-0"
                />
            </label>
        </>
    );
}

export default RatingButton;
