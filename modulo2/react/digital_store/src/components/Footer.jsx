import Logo from "./Logo";
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import FooterInfoComponent from "./FooterInfoComponent";
const Footer = () => {
    return (
        <>
            <footer 
                id="main-footer"
                className=" bg-(--dark-gray) text-(--white-color) p-5"
            >
            <div
                id="footer-content-main-div" 
                className="">
                <div 
                        id="footer-logo-div"
                        className="gap-5"
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
                    <div 
                        id="footer-info-categories-div"
                        className="flex"
                    >
                        <FooterInfoComponent
                            title={"Informações"}
                            information={
                                {
                                    "Sobre":"/about",
                                    "Segurança":"/security",
                                    "Wishlist":"/wishlist",
                                    "Meus Pedidos":"/orders",
                                    "Trabalhe Conosco":"/workwithus"
                                }
                            }
                        />
                        <FooterInfoComponent
                            title={"Categorias"}
                            information={{
                                "Camisetas":"/tshirts",
                                "Calças":"/pants",
                                "Tênis":"/sneakers",
                                "Headphones":"/headphones"
                            }}
                        />
                        <FooterInfoComponent
                            title={"Contato"}
                            information={
                                {
                                    "Endereço Genérico":"/local",
                                    "(85) 9 1234-5678":"/phone"
                                }
                            }
                        />
                    </div>
            </div>
                
                <hr className="mb-2 mt-25"/>
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