import Logo from "./Logo";
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
const Footer = () => {
    return (
        <>
            <footer 
                className="flex flex-col bg-(--dark-gray-2) text-(--white-color) w-full p-5"
            >
                <div 
                    id="footer-logo-div"
                    className="w-[20%] flex flex-col gap-5"
                >
                    <Logo
                        logoLocal={"Footer"}
                    />
                    <p id="footer-desc-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nostrum reiciendis reprehenderit recusandae asperiores voluptates architecto sit numquam aut natus aliquam provident, minima totam tenetur quo quidem laborum quam ipsa!
                    </p>
                    <div 
                        id="social-icons-div"
                        className="flex gap-7"
                    >
                        <img src={FacebookIcon}/>
                        <img src={InstagramIcon}/>
                        <img src={TwitterIcon}/>
                    </div>
                </div>
                <div id="footer-info-categories-div"></div>
                <div id="footer-contact-div"></div>
                <hr className="mb-2 mt-5"/>
                <div 
                    id="footer-rights-div"
                    className="w-full flex justify-center"
                    >
                    <p className="self-center">© 2026 Digital College</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;