"use client";

import {memo} from 'react';
import type { FC } from 'react';
import {Col, Row} from "antd";
import styles from './index.module.scss'
import type {IHotProduct} from "@/components/product-list";
import GridViewItem from '@/components/grid-view-item'

interface IProps {
    data: IHotProduct[]
}
const GridView: FC<IProps> = (props) => {
    const { data } = props

    return (
        <div className={styles['grid-view']}>
            <Row>
                {data?.map((item, index) => {
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
