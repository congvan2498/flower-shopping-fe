import {Provider} from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css';
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {unstable_createMuiStrictModeTheme} from "@material-ui/core";


export var theme = unstable_createMuiStrictModeTheme({
    palette: {
        primary: {
            main: "#00b46e",
            dark: "#00a45e",
            contrastText: "#fff",
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "*::-webkit-scrollbar": {
                    width: "10px",
                },
                /* Track */
                "*::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 5px grey",
                    borderRadius: "10px",
                },

                /* Handle */
                "*::-webkit-scrollbar-thumb": {
                    background: "rgba(0, 180, 110, 0.7)",
                    borderRadius: "10px",
                },
                /* Handle on hover */
                "*::-webkit-scrollbar-thumb:hover": {
                    background: "rgba(0, 180, 110, 1)",
                },
            },
        },
        MuiTableCell: {
            body: {
                fontSize: "12px",
            },
            // root: {
            //   padding: "0",
            // },
            root: {
                padding: "5px 10px",
            },
            sizeSmall: {
                padding: "5px 10px",
                fontSize: "10px",
                "&:last-child": {
                    paddingRight: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: 0,
            },
        },
    },
    props: {
        MuiButton: {
            disableElevation: true,
        },
    },
});

let menu = [
    {
        key: "DELIVERY",
        name: "Trang Chủ",
        link: ``,
    },
    {
        key: "CART",
        name: "Giỏ hàng",
        link: `/cart`,
    },

];

function MyApp({Component, pageProps}) {
    const router = useRouter();
    const [showLoader, setShowLoader] = React.useState(true);
    const [showBackdrop, setShowBackdrop] = React.useState(false);

    useEffect(() => {
        let routeChangeStart = () => setShowBackdrop(true);
        let routeChangeComplete = () => setShowBackdrop(false);

        router.events.on("routeChangeStart", routeChangeStart);
        router.events.on("routeChangeComplete", routeChangeComplete);
        router.events.on("routeChangeError", routeChangeComplete);
        setTimeout(() => {
            setShowLoader(false);
        }, 500);
        return () => {
            router.events.off("routeChangeStart", routeChangeStart);
            router.events.off("routeChangeComplete", routeChangeComplete);
            router.events.off("routeChangeError", routeChangeComplete);
        };
    }, []);
    return (
        <Provider store={store}>
            <div className="wrapper">
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
