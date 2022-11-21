import RatingButton from "./RatingButton";
import star from "./assets/icon-star.svg";

function RatingCard({ rating, handleSubmit, handleSelect }) {
    const ratings = [];

    for (let i = 1; i <= 5; i++) {
        ratings.push(
            <RatingButton
                ratingValue={i}
                handleSelect={handleSelect}
                selected={rating}
                key={i}
            />
        );
    }

    return (
        <>
            <span className="p-3 inline-block rounded-full bg-slate-700">
                <img src={star} alt="" />
            </span>
            <h1 className="text-2xl text-white font-semibold mt-5">
                How did we do?
            </h1>
            <p className="text-sm text-slate-400 mt-3">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <form action="">
                <div className="flex justify-between my-6">{ratings}</div>
                <button
                    disabled={rating !== undefined ? false : true}
                    onClick={handleSubmit}
                    className={`w-full p-3 rounded-full uppercase font-semibold tracking-widest ${
                        rating !== undefined
                            ? "bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors delay-75"
                            : "disabled:bg-slate-800 disabled:text-slate-600 opacity-50"
                    }`}>
                    Submit
                </button>
            </form>
        </>
    );
}

export default RatingCard;
