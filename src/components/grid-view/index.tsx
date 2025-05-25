"use client";

import {memo, useEffect, useState} from 'react';
import type { FC } from 'react';
import {Col, Row} from "antd";
import styles from './index.module.scss'
import GridViewItem from '@/components/grid-view-item'

interface IProducts {
    id: number;
    name: string;
    coverUrl: string;
    minPrice: number;
    originalCost: number;
    couponLabelDesc: string;
}
export interface IHotProduct {
    id: number;
    name: string;
    products: IProducts;
}
const GridView: FC = () => {
    const [product, setProduct] = useState<IHotProduct[]>([])
    useEffect(() => {
        fetch('/api/hotproduct')
            .then(res => res.json())
            .then(data => {
                setProduct(data.data.hotProduct)
            })
    }, []);

    return (
        <div className={styles['grid-view']}>
            <Row>
                {product?.map((item, index) => {
                    return (
                        <Col span={6} key={item.id}>
                            <div className={styles['view-item']}>
                                <GridViewItem
                                    showTip={index === 0}
                                    product={item}
                                />
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default memo(GridView)
