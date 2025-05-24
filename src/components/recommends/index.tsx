"use client";

import {memo, useEffect, useState} from "react";
import type { FC } from 'react';
import {Row, Col} from "antd";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from './index.module.scss'

interface IRecommends {
    id: number;
    picStr: string;
    title: string;
}
const Recommends: FC = () => {
    const [recommendList, setRecommendList] = useState<IRecommends[]>([])

    useEffect(() => {
        fetch('/api/recommends')
            .then(res => res.json())
            .then(data => {
                setRecommendList(data.data.recommends)
            })
    }, [])

    return (
        <div className={styles.recommend}>
            <div className={classNames('wrapper',styles.content)}>
                <Row>
                    {
                        recommendList?.map((item) => {
                            return (
                                <Col
                                    span={12}
                                    key={item.id}
                                >
                                    <Link
                                        href={{
                                            pathname: '/detail',
                                                query: {
                                                    id: item.id
                                                }
                                        }}
                                    >
                                        <div className='recommend-item'>
                                            {/* priority 启用预加载 */}
                                            <Image
                                                className={styles.image}
                                                src={item.picStr}
                                                width={542}
                                                priority
                                                height={300}
                                                alt="hy next"
                                            ></Image>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default memo(Recommends)
