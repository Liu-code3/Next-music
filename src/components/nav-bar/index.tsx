import type { FC } from "react";
import { memo } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from './index.module.scss'
import Search from "@/components/search";

const NavBar: FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={classNames("wrapper", styles.content)}>
                <div className={styles["content-left"]}>
                    <Link href="/" className={styles.logo}></Link>
                    <h1 className={styles.title}>网易云音乐商城</h1>
                </div>

                <div className={styles["content-right"]}>
                    <Search />

                    <div className={styles['right-cart']}>
                        <a href="#" className={styles.cart}>
                            <span className={styles.count}>0</span>
                        </a>
                    </div>
                    <div className={styles['right-login']}>登录</div>
                </div>
            </div>
        </div>
    )
}

export default memo(NavBar)
