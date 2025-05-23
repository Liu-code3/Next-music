"use client";

import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import {Col, Row} from "antd";
import styles from './index.module.scss';

interface ITabsCatgories {
    cid: number;
    tabIndex: number;
    picStr: string;
    title: string;
    count: number;
    targetUrl: string;
    type: number;
    desc: string;
}
const TabCategory: FC = () => {
    const [tabs, setTabs] = useState<ITabsCatgories[]>([])

    useEffect(()=>  {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => {
                setTabs(data.data.categories)
            })
    }, [])


    function handleTabIndexByJump (item: ITabsCatgories) {
        if(item.tabIndex === 0 || item.tabIndex === 1) {
            return {
                pathname: '/search',
                    query: {
                        q: item.title
                    }
            }
        } else if(item.tabIndex === 2) {
            return {
                pathname: '/detail',
                query: {
                    id: item.cid
                }
            }
        } else {
            // 云倍商城
            if (process.env.client) {
                window.document.open(item.targetUrl);
            }
            return {};
        }
    }

    return (
        <div className={styles["tab-category"]}>
            <div className={classNames("wrapper", styles.content)}>
                <Row>
                    {tabs?.map((item) => {
                        return (
                            <Col span={6} key={item.cid}>
                                {/* span: 栅格占位6格数,all屏幕 */}
                                <Link
                                    className={styles["category-item"]}
                                    href={handleTabIndexByJump(item)}
                                    >
                                    <Image
                                        className={styles.image}
                                        src={item.picStr}
                                        width={48}
                                        height={48}
                                        alt="xm next"
                                    ></Image>
                                    <div className={styles.right}>
                                        <div className={styles.title}>{item.title}</div>
                                        {
                                            item.type === 1 && (
                                                <div className={styles['sub-title']}>
                                                    <span className={styles.count}>{item.count}</span>
                                                    <span>{item.desc}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default memo(TabCategory)
