import MyApp from "./_app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout(props) {
    const {children} = props
    return (
        <MyApp>
            <Navbar />
            {children}
            <Footer />
        </MyApp>
    );
}
