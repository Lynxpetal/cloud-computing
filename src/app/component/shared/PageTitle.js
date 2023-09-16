import "styles/components/pageTitle.scss"

const PageTitle = ({ title }) => {
    return (
        <div className="container pageTitle centerFlex" >
            <div className="row">
                <div className="centerFlex">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
