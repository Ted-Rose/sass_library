const TextSubscribe = ({ textVisibility }) => {
    return (
        <div className={`${textVisibility} text`}>
            <div className="heading text-thank-you">Subscribe to newsletter</div>
            <p className="subheading text-thank-you">
                Subscribe to our newsletter and get 10% discount on pineapple glasses.
            </p>
        </div>
    )
}
export default TextSubscribe;
