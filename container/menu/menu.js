import Link from "next/link";
import {useContext} from "react";

function AppMenuItem(props) {

    const data = props.item
    let active = props.select == data.link
    return (
        <Link href={data.link} key={data.key} prefetch={false}>
            <a className={styles.menuName + " " + (active ? styles.menuItemActive : styles.menuItem)}>
                <FontAwesomeIcon icon={data.icon} className={styles.menuIcon}/>
                <span>{data.name}</span>
            </a>
        </Link>
    )
}

export default function AppMenu(props) {
    return (
        <div className={styles.menuWrapper}>
            {
                props.menu.map(
                    (item) => {
                        if (item.autoDisplay) {
                            return <AppMenuItem item={item} key={item.key} select={props.select}/>
                        }

                        return <AppMenuItem item={item} key={item.key} select={props.select}/>
                    }
                )
            }
        </div>
    )
}
