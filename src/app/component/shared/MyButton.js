// Styles
import "/styles/components/myButton.scss";

const MyButton = ({ text, onClick, classes, styles }) => {
    return (
        <button
            type="button"
            className={"myButton " + (classes ?? "")}
            onClick={onClick}
            styles={styles}>
            {text}
        </button>
    );
};

export default MyButton;
