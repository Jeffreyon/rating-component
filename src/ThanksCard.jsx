import thankYouImg from "./assets/illustration-thank-you.svg";

function ThanksCard({ rating }) {
    return (
        <>
            <span className="p-3 rounded-full flex w-full justify-center">
                <img src={thankYouImg} alt="" />
            </span>
            <div className="mt-5 flex justify-center">
                <span className="px-3 py-1 text-orange-500 rounded-full bg-slate-800 text-sm">
                    You selected {rating} out of 5
                </span>
            </div>
            <h1 className="text-center text-2xl font-semibold mt-5 text-white">
                Thank you!
            </h1>
            <p className=" text-center text-slate-500 text-sm my-3">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
            </p>
        </>
    );
}

export default ThanksCard;
