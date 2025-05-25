"use client";
import {memo} from "react";
import type { FC, ReactNode } from 'react';
import {IProducts} from "@/components/product-list";

import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss'

interface IProps {
    children: ReactNode;
    product: IProducts;
    showTip: boolean;
}
const GridViewItem: FC<Partial<IProps>> = (props) => {
    const { product, showTip } = props;

    // 空状态处理
    if (!product) {
        return <div className={styles['empty-state']}>暂无数据</div>;
    }
    return (
        <div className={styles['grid-view-item']}>
            <Link
                href={{
                    pathname: '/good-detail',
                    query: {
                        q: product.name,
                        id: product.id
                    }
                }}
            >
                <div className={styles['item-image']}>
                    <Image
                        className={styles.image}
                        src={product.coverUrl}
                        alt="music"
                        width={263}
                        height={263}
                    />
                    {showTip && (
                        <div className={styles.tip}>
                            <div>¥{product.minPrice}</div>
                            <div className={styles['original-cost']}>
                                ¥{product.originalCost}
                            </div>
                        </div>
                    )}
                </div>
            </Link>
            <div className={styles['item-info']}>
                {/* label */}
                { product.couponLabelDesc && (
                    <span className={styles.label}>{product.couponLabelDesc}</span>
                )}
                {/* Link */}
                <Link href={`/detail?id${product.id}`} className={styles.name}>
                    {product.name}
                </Link>
            </div>
            <div className={styles["item-price"]}>¥{product.minPrice}</div>
        </div>
    )
}

export default memo(GridViewItem)
