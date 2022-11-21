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
        <div className="h-screen flex justify-center items-center p-3">
            <div className="max-w-sm p-7 bg-slate-900 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl">
                {showing == "ratingCard" && (
                    <RatingCard
                        rating={rating}
                        handleSubmit={handleSubmit}
                        handleSelect={handleSelect}
                    />
                )}
                {showing == "thanksCard" && <ThanksCard rating={rating} />}
            </div>
        </div>
    );
}

export default App;
