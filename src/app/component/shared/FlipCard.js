import "styles/special/flipcard3d.scss"

const FlipCard = ({ children }) => {
    return (
        <div className="card">
            <div className="card__side card__side--front card__side--front">
                <div className="card__description">1</div>
            </div>
            <div className="card__side card__side--back card__side--back">
                <div className="card__description">{children}</div>
            </div>
        </div>
    );
};

export default FlipCard;
