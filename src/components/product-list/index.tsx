"use client";

import type {FC} from 'react';
import {useState, useEffect, memo} from "react";
import SectionTitle from "@/components/section-title";
import GridView from "@/components/grid-view";
import DigitalPanel from "@/components/digital-panel";


/*
 * 组件名: ProductList
 * 创建日期: 2025/5/25 15:37
 * 编写者: ls
 */

export interface IProducts {
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

export type ProductItemType = IHotProduct | IProducts;
export type ProductListDataType = ProductItemType[];

const ProductList: FC = () => {
    const [product, setProduct] = useState<ProductListDataType>([]);
    const [allProduct, setallProduct] = useState<ProductListDataType>([]);

    useEffect(exec, []);

    function exec() {
        fetch('/api/hotproduct')
            .then(res => res.json())
            .then(data => {
                setProduct(data.data.hotProduct)
            })

        fetch('/api/allProduct')
            .then(res => res.json())
            .then(data => {
                setallProduct(data.data.allProduct)
            })
    }

    return (
        <div className="ProductList">
            <SectionTitle title="编辑推荐" />
            <GridView data={product} />
            <DigitalPanel />
            <SectionTitle title="热门商品" />
            <GridView data={allProduct} />
        </div>
    );
};

export default memo(ProductList);

