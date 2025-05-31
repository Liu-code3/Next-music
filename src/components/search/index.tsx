"use client";
import {FC, KeyboardEvent} from "react";
import { memo, useState } from "react";
import classNames from "classnames";
import { Spin } from 'antd';
import { useGetSuggestSearchQuery } from "@/store/services/homeApi";

import styles from './index.module.scss'
import {usePathname, useRouter} from "next/navigation";

const Search: FC = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [placeholder, setPlaceholder]= useState("请输入")
    const [inputFocus, setInputFocus] = useState(false)
    const {data, error,  isLoading} = useGetSuggestSearchQuery(null)

    function handleInputFocus (isFocus: boolean) {
        setInputFocus(isFocus)
    }

    function handleKeyDown (e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const targetVal = (e.target as HTMLInputElement).value
            if(!targetVal && pathname !== '/') return router.push('/')
            setPlaceholder(targetVal)
            handleInputFocus(false)
            router.push(`/search?q=${targetVal}`)
        }
    }

    // 为什么不用能用click，因为click完成的时候面板已经被销毁了
    // click 其实是 mousedown + mouseup
    function handleItemClick (name: string) {
        setPlaceholder(name)
        // 跳转到搜索页面
        router.push(`/search?q=${name}`)
    }

    return (
        <div className={styles.search}>
            <div className={styles['search-bg']}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder={placeholder}
                    onFocus={() => handleInputFocus(true)}
                    onBlur={() => handleInputFocus(false)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className={classNames(
                styles['search-panel'],
                styles[inputFocus ? 'show' : 'hide']
            )}>
                <div className={styles.shadow}></div>
                {
                    isLoading ?
                        <div className="loading-main">
                            <Spin />
                        </div>
                        :
                        <div>
                            <h2>{data?.data.defaultKey}</h2>
                            <ul>
                                {
                                    data?.data.configKey.map((item, index) => {
                                        return <li key={index} onMouseDown={() => handleItemClick(item[index + 1])}>{item[index + 1]}</li>
                                    })
                                }
                            </ul>
                        </div>
                }
                {
                    error ? 'error' : ''
                }
            </div>
        </div>
    )
}

export default memo(Search)
