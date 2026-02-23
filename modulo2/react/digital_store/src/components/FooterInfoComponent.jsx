import { NavLink } from "react-router-dom";

const FooterInfoComponent = ({title,information}) => {

    return (
        <>
            <nav
                className="flex flex-col gap-5 shadow-md"
            >
                <h1 className="text-2xl font-extrabold">{title}</h1>
                <div className="flex flex-col gap-5">
                {Object.entries(information).map(([label, urlPath]) => (
                    <NavLink 
                        key={label} 
                        to={urlPath}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
            </nav>
        </>
    )
}
export default FooterInfoComponent;