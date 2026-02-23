import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <>
            <section
                className="bg-(--white-color) flex flex-col items-center h-screen gap-50"
            >
                <h1
                    className="text-4xl"
                >Page not Found</h1>
                <Link
                    to="/"
                >
                    <button
                        className=" text-3xl bg-(--primary-color) border-0 cursor-pointer text-(--white-color) rounded-2xl p-2
                        hover:bg-(--secondary-color)"
                    >Home</button>
                </Link>
            </section>
        </>
     );
}
 
export default Page404;