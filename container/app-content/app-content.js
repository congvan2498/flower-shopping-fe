import styles from "./app-content.module.css"
import React from 'react';

export default function AppContent(props) {
    const { children } = props
    return (
        <div className={styles.contentWrapper + " " + (props.noMenu ? styles.noMenu : "")}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
