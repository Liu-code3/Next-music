"use client";

import type {FC} from 'react';
import {useState, useEffect, useMemo, memo} from "react";
import SectionTitle from "@/components/section-title";
import GridView from "@/components/grid-view";



/*
 * 组件名: ProductList
 * 创建日期: 2025/5/25 15:37
 * 编写者: ls
 */

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

const ProductList: FC = () => {
    const [product, setProduct] = useState<IHotProduct[]>([]);

    // 优化 memo 组件的引用类型 Props
    const productProp = useMemo(() => product, [product]);

    useEffect(exec, []);

    function exec() {
        fetch('/api/hotproduct')
            .then(res => res.json())
            .then(data => {
                setProduct(data.data.hotProduct)
            })
    }

    return (
        <div className="ProductList">
            <SectionTitle title="编辑推荐" />
            <GridView data={productProp} />
        </div>
    );
};

export default memo(ProductList);

