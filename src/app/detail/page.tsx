"use client";

import {FC, useEffect, useState} from 'react';
import { memo } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import styles from "./index.module.scss";
import GridView from "@/components/grid-view";
import type { ProductListDataType } from "@/components/product-list";
import {Spin} from "antd";
/*
 * 组件名: page
 * 创建日期: 2025/5/30 22:04
 * 编写者: ls
 */
const Detail: FC = () => {
    // const id = props.searchParams.id
    const [loading, setLoding] = useState(false)
    const [product, setProduct] = useState<{  webPic: string; products: ProductListDataType }>()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(exec, [id]);

    function exec() {
        setLoding(true)
        fetch(`/api/special/getdetail?id=${id}`).then(res => {
            return res.json()
        }).then(data => {
            setLoding(false)
            setProduct(data.data)
        })
    }
    // 带选项的请求

    if(loading) {
        return (
            <div className="loading-main">
                <Spin />
            </div>
        )
    }

    if(!product) {
        return (
            <div>
                暂无数据
            </div>
        )
    }

    return (
        <div className={styles.detail}>
            <div className={classNames("wrapper", styles["content"])}>
                <div className={styles.banner}>
                    <Link href={"/"}>
                        <Image src={product.webPic} alt="next" priority fill></Image>
                    </Link>
                    {/* <Image src={detailData!.webPic} alt="next" priority fill></Image> */}
                </div>
                <GridView data={product.products}></GridView>
            </div>
        </div>
    );
};

export default memo(Detail);

