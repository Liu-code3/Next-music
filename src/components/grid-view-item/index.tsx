"use client";
import {memo} from "react";
import type { FC, ReactNode } from 'react';
import type {IHotProduct} from "@/components/product-list";

import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss'

interface IProps {
    children: ReactNode;
    product: IHotProduct;
    showTip: boolean;
}
const GridViewItem: FC<Partial<IProps>> = (props) => {
    const { product, showTip } = props;

    if(!product || !product.products) {
        return <div>
            暂无数据
        </div>
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
                        src={product.products.coverUrl}
                        alt="music"
                        width={263}
                        height={263}
                    />
                    {showTip && (
                        <div className={styles.tip}>
                            <div>¥{product.products.minPrice}</div>
                            <div className={styles['original-cost']}>
                                ¥{product.products.originalCost}
                            </div>
                        </div>
                    )}
                </div>
            </Link>
            <div className={styles['item-info']}>
                {/* label */}
                { product.products.couponLabelDesc && (
                    <span className={styles.label}>{product.products.couponLabelDesc}</span>
                )}
                {/* Link */}
                <Link href={`/detail?id${product.products.id}`} className={styles.name}>
                    {product.products.name}
                </Link>
            </div>
            <div className={styles["item-price"]}>¥{product.products.minPrice}</div>
        </div>
    )
}

export default memo(GridViewItem)
