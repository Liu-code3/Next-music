import type {FC} from 'react';
import {memo} from "react";
import GridView from "@/components/grid-view";
import BreadCrumb from "@/components/bread-crumb";

interface IProps {
    searchParams: {
        q: string
    }
}
/*
 * 组件名: page
 * 创建日期: 2025/5/31 15:28
 * 编写者: ls
 */
const SearchDetail: FC<IProps> = async (props) => {
    const {searchParams} = props;

    const links = [
        {
            name: "首页",
            link: "/",
            id: 10413,
        },
        {
            // name: "耳机",
            name: searchParams.q || '全部',
            link: null,
            id: 10414,
        },
    ];


    // 带选项的请求
    const freshRes = await fetch(`http://localhost:3000/api/search/product?q=${searchParams.q}`, {
        cache: 'no-store', // 不缓存
        next: {
            revalidate: 60, // 每60秒重新验证
            tags: ['collection'] // 可以用于按标签重新验证
        }
    });
    const freshData = await freshRes.json();

    return (
        <div className="wrapper">
            <BreadCrumb links={links}></BreadCrumb>
            <GridView data={freshData.data}></GridView>
        </div>
    );
};

export default memo(SearchDetail);

