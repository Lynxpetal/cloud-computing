import "styles/components/mysection.scss";

const Section = ({ children, bgColor }) => {
    return (
        <div
            className="mysection"
            style={{
                backgroundColor: bgColor ? bgColor : "white",
            }}>
            <div className="container centerFlex">{children}</div>
        </div>
    );
};

export default Section;
