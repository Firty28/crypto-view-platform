import style from "./header.module.css"
import NotificationIcon from "@shared/assets/icon/notification.svg?react"
import SettingsIcon from "@shared/assets/icon/settings.svg?react"
import UserIcon from "@shared/assets/icon/user.svg?react"

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <div className={style.logoIcon}></div>
                <div className={style.logoName}>
                    CryptoView
                </div>
            </div>
            <div className={style.nav}>
                <ul className={style.navList}>
                    <li className={style.navItem}>Home</li>
                    <li className={style.navItem}>Chart</li>
                    <li className={style.navItem}>Other</li>
                </ul>
            </div>
            {/* TODO */}
            {/* <div className={style.search}>
                <input type="text" />
            </div> */}
            <div className={style.userMenu}>
                <div className={style.notification}>
                    <NotificationIcon />
                </div>
                <div className={style.settings}>
                    <SettingsIcon/>
                </div>
                <div className={style.userProfile}>
                    <UserIcon/>
                </div>
            </div>
        </div>
    );
}

