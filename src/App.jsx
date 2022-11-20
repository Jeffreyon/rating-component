import { useState } from "react";
import RatingCard from "./RatingCard";
import ThanksCard from "./ThanksCard";

function App() {
    const [rating, setRating] = useState();
    const [showing, setShowing] = useState("ratingCard");

    function handleSelect(userRating) {
        setRating(userRating);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setShowing("thanksCard");
    }

    return (
        <>
            {showing == "ratingCard" && (
                <RatingCard
                    rating={rating}
                    handleSubmit={handleSubmit}
                    handleSelect={handleSelect}
                />
            )}
            {showing == "thanksCard" && <ThanksCard rating={rating} />}
        </>
    );
}

export default App;
