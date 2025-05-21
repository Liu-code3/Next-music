import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface ISuggestData  {
    code: number;
    data: {
        id: string;
        defaultKey: string;
        configKey: { [key: string]: string }[]
    }
}

export const homeApi   = createApi({
    reducerPath: 'homeApi', // 定义 API 在 Redux store 中的命名空间。
    baseQuery:  fetchBaseQuery({ baseUrl: 'http://codercba.com:9060/music-next/api'}), // 使用 fetchBaseQuery 配置基础 URL，支持自定义（如添加认证头）。
    // 定义查询（query）和变异（mutation）端点。
    endpoints: (builder) => ({
        getSuggestSearch: builder.query<ISuggestData, null>({
            query: () => '/searchsuggest/get'
        })
    })
})

// 导出 hooks 以在组件中使用
export const { useGetSuggestSearchQuery } = homeApi
