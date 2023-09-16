import "@/styles/components/loadingButton.scss";

const LoadingButton = ({ type, text, onClick, loading = false, disabled }) => {
    return (
        <button className="submit-btn" type={type} onClick={onClick} disabled={disabled}>
            {!loading ? text : <img src="/svg/circle-notch-solid-white.svg" className="spinner submit-btn-icon" />}
        </button>
    )
}

export default LoadingButton