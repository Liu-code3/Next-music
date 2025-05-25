"use client";

import type {FC} from 'react';
import {useState, useEffect, memo} from "react";
import Image from 'next/image';
import styles from "./index.module.scss";


/*
 * 组件名: DigitalPanel
 * 创建日期: 2025/5/25 18:07
 * 编写者: ls
 */

interface IItemData {
    digitalIcon: string;
    name: string;
    desc: string;
    buyNow: string;
    picStr1: string;
    picStr2: string;
}
const DigitalPanel: FC = () => {
    const [itemData, setItemData] = useState<IItemData | null>(null);
    const [loading, setLoading] = useState(false)


    useEffect(exec, []);

    function exec () {
        setLoading(true)
        fetch('/api/digitalData')
            .then(res => res.json())
            .then(data => {
                setItemData(data.data.digitalData)
                setLoading(false)
            })
    }

    if(!itemData) {
        return (
            <div>暂无数据</div>
        )
    }


    return  loading ? (<div>loading</div>) :
        (
        <div className={styles["digital-panel"]}>
            <div className={styles["panel-left"]}>
                <div className={styles["info"]}>
                    <Image
                        className={styles.icon}
                        src={itemData.digitalIcon}
                        width={32}
                        height={32}
                        alt="xm next"
                    />
                </div>
                <div className={styles.desc}>{itemData.desc}</div>
                <a
                    href="https://music.163.com/v/w/album/rank"
                    className={styles["buy-now"]}
                >
                    {itemData.buyNow}
                </a>
            </div>
            <div className={styles["panel-right"]}>
                <Image
                    className={styles.image1}
                    src={itemData.picStr1}
                    width={100}
                    height={100}
                    alt="xm next"
                ></Image>
                <Image
                    className={styles.image2}
                    src={itemData.picStr2}
                    width={120}
                    height={120}
                    alt="xm next"
                ></Image>
                <i className={styles.image}></i>
            </div>
        </div>
    );
};

export default memo(DigitalPanel);

