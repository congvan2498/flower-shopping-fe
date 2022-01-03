import MyApp from "./_app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useContext} from "react";
import Link from "next/link";
import App from "../container/app";

export default function LayoutApp(props) {
    const {children} = props
    return (
        <App>
            {children}
        </App>
    );
}

