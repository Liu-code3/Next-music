"use client";

import {FC, useEffect} from 'react';
import {memo, useState} from "react";
import GridView from "@/components/grid-view";
import BreadCrumb from "@/components/bread-crumb";
import TabSelect from "@/components/tab-select";
import {useSearchParams} from "next/navigation";

/*
 * 组件名: page
 * 创建日期: 2025/5/31 15:28
 * 编写者: ls
 */
const SearchDetail: FC = () => {
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    const [products, setProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const links = [
        {
            name: "首页",
            link: "/",
            id: 10413,
        },
        {
            // name: "耳机",
            name: q || '全部',
            link: null,
            id: 10414,
        },
    ];

    const selectsData = [
        {
            id: 164331,
            sort: "default",
            name: "综合",
        },
        {
            id: 164332,
            sort: "price_asc",
            name: "价格低到高",
        },
        {
            id: 164333,
            sort: "price_desc",
            name: "价格高到低",
        },
    ];

    useEffect(exec, [q]);

    function exec () {
        fetch(`/api/search/product?limit=60&offset=0&q=${q}`)
            .then(res =>  res.json())
            .then(data => {
                setProducts(data.data);
                setNewProducts(data.data)
            })
    }


    function handleTabItemClick(item: any) {
        // console.log(item); // {id: 164332, sort: 'price_asc', name: '价格低到高'}

        // 恢复默认
        if (item.sort === "default") {
            setNewProducts([...products]);
            return;
        }
        // 对新的数组进行排序
        newProducts.sort((a: any, b: any) => {
            if (item.sort === "price_asc") {
                return a.minPrice - b.minPrice; // 升序
            } else if (item.sort === "price_desc") {
                return b.minPrice - a.minPrice; // 降序
            } else {
                return 0;
            }
        });
        setNewProducts([...newProducts]);
    }

    return (
        <div className="wrapper">
            <BreadCrumb links={links}></BreadCrumb>
            <TabSelect
                selectsData={selectsData}
                onItemClick={handleTabItemClick}
            ></TabSelect>
            <GridView data={newProducts}></GridView>
        </div>
    );
};

export default memo(SearchDetail);

