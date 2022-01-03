import AppMenu from "../pages/_layout";
import styles from "./app.module.css"
import AppContent from "./app-content/app-content";

export default function App(props) {
    const {children} = props
    return (
        <div className={styles.appWrapper}>
            <div className={styles.spanner}/>
            <AppMenu menu={props.menu} select={props.select}/>
            <AppContent noMenu={!props.menu}>
                {children}
            </AppContent>
        </div>
    )
}
