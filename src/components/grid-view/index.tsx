"use client";

import {memo} from 'react';
import type { FC } from 'react';
import {Col, Row} from "antd";
import styles from './index.module.scss'
import type {ProductListDataType, ProductItemType, IHotProduct} from "@/components/product-list";
import GridViewItem from '@/components/grid-view-item'

interface IProps {
    data: ProductListDataType
}
const GridView: FC<IProps> = (props) => {
    const { data } = props

    // 类型守卫函数
    const isHotProduct = (item: ProductItemType): item is IHotProduct => {
        return 'products' in item;
    };
    return (
        <div className={styles['grid-view']}>
            <Row>
                {data?.map((item, index) => {
                    return (
                        <Col span={6} key={item.id}>
                            <div className={styles['view-item']}>
                                <GridViewItem
                                    showTip={index === 0}
                                    // 根据类型自动推导
                                    product={isHotProduct(item) ? item.products : item}
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
