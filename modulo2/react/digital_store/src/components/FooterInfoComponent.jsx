const FooterInfoComponent = ({title,information}) => {
    return (
        <>
            <div
                className="flex flex-col gap-5"
            >
                <h1>{title}</h1>
                <p>{information}</p>
            </div>
        </>
    )
}
export default FooterInfoComponent;