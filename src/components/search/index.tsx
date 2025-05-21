"use client";
import type { FC, KeyboardEvent } from "react";
import { memo, useState } from "react";
import classNames from "classnames";
import { useGetSuggestSearchQuery } from "@/store/services/homeApi";

import styles from './index.module.scss'

const Search: FC = () => {
    const [inputFocus, setInputFocus] = useState(false)
    const { data, error,  isLoading } = useGetSuggestSearchQuery(null)

    function handleInputFocus (isFocus: boolean) {
        setInputFocus(isFocus)
    }

    function handleKeyDown (e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const targetVal = (e.target as HTMLInputElement).value
            console.log(targetVal, 'vv')
        }
    }

    return (
        <div className={styles.search}>
            <div className={styles['search-bg']}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="请输入"
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
                    isLoading ? 'loading' : <div>
                        <h2>{data?.data.defaultKey}</h2>
                        <ul>
                            {
                                data?.data.configKey.map((item, index) => {
                                    return <li key={index}>{item[index + 1]}</li>
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
