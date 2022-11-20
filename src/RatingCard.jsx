import RatingButton from "./RatingButton";

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
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering! 1 2 3 4
                5 Submit You selected out of 5 Thank you! We appreciate you
                taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
            <form action="">
                {ratings}
                <button
                    disabled={rating !== undefined ? false : true}
                    onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
}

export default RatingCard;
