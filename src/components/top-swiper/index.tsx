"use client";

import {memo, useEffect, useRef, useState} from "react";
import type { FC } from 'react'
import classNames from "classnames";
import {Button, Carousel} from "antd";
import Image from "next/image";
import { CarouselRef } from "antd/es/carousel";
import styles from './index.module.scss'

interface IBannersList {
    id: number;
    picStr: string;
    backendPicStr: string;
}
 const TopSwiper: FC = () => {
    const [current, setCurrent] = useState(0)
     const [banners, setBanners] =  useState<IBannersList[]>([])
    const bannerRef = useRef<CarouselRef>(null);

    useEffect(() => {
        fetch('/api/homeInfo')
            .then(res => res.json())
            .then(data => {
                setBanners(data.data.banners)
            })
    }, [])

    function handleAfterChange (current: number) {
        setCurrent(current)
    }

    function handlePrev() {
        bannerRef.current?.prev()
    }

     function handleNext() {
        bannerRef.current?.next()
    }

    return (
        <div className={styles['top-swiper']}>
            <div className={classNames("wrapper", styles.content)}>
            {/* 轮播图，比如1100px大 2000px */}
            <Carousel
                ref={bannerRef}
                className={styles.carousel}
                autoplay
                autoplaySpeed={3000}
                dots={false}
                effect="fade"
                afterChange={handleAfterChange}
            >
                {
                    banners.map(item => {
                        return (
                            <div className={styles["swiper-item"]} key={item.id}>
                                <div
                                    className={styles["swiper-bg"]}
                                    style={{ backgroundImage: `url(${item.backendPicStr})`}}
                                ></div>
                                <Image
                                    className={styles.image}
                                    src={item?.picStr}
                                    alt="music"
                                    priority
                                    width={1100}
                                    height={480}
                                ></Image>
                            </div>
                        )
                    })
                }
            </Carousel>

            {/* 定位-分页器 */}
            <ul className={styles.dots}>
                {banners.map((item, index)  => {
                    return (
                        <li
                            key={item.id}
                            className={classNames(styles.dot,  {
                                [styles.active]: index ===  current
                            })}
                        ></li>
                    )
                })}
            </ul>

            {/* 定位：上一页和下一页 */}
            <Button className={styles.prev} onClick={handlePrev}>
                <span></span>
            </Button>
            <Button className={styles.next} onClick={handleNext}>
                <span></span>
            </Button>

            </div>
        </div>
 )

}

export default memo(TopSwiper)
