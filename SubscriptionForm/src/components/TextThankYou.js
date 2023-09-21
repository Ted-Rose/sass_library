import IcSuccess from "./Images/ic_success.svg";

const TextThankYou = ({ textVisibility }) => {
    return (
        <div className={`${textVisibility} text`}>
            <img
                src="https://c.animaapp.com/YEFHTRZw/img/ic-success.svg"
                alt="SVG success"
                className="union-svg"/>
            <p className="subheading">
                You have successfully
                subscribed to our email listing. Check your
                email for the discount code.
            </p>
            <div className="heading">Thanks for subscribing!</div>
        </div>
    )
}
export default TextThankYou;
