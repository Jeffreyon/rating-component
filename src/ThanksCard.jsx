function ThanksCard({ rating }) {
    return (
        <>
            <p>You selected {rating} out of 5</p>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
            </p>
        </>
    );
}

export default ThanksCard;
