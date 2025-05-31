import type {FC} from 'react';
import {memo} from "react";
import GridView from "@/components/grid-view";

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
const SearchDeatil: FC<IProps> = async (props) => {
    const {searchParams} = props;

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
            <GridView data={freshData.data}></GridView>
        </div>
    );
};

export default memo(SearchDeatil);

