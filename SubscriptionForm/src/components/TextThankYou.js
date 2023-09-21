import IcSuccess from "./Images/ic_success.svg";

const TextThankYou = ({ textVisibility }) => {
    return (
        <div className={`${textVisibility} text`}>
            <img
                src="https://c.animaapp.com/YEFHTRZw/img/ic-success.svg"
                alt="SVG success"
                className="union-svg"/>
            <div className="heading thank-you">Thanks for subscribing!</div>
            <p className="subheading thank-you">
                You have successfully
                subscribed to our email listing. Check your
                email for the discount code.
            </p>
        </div>
    )
}
export default TextThankYou;
