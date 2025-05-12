"use client";
import type { FC } from "react";
import { memo, useState } from "react";
import classNames from "classnames";

import styles from './index.module.scss'

const Search: FC = () => {
    const [inputFocus, setInputFocus] = useState(false)

    function handleInputFocus (isFocus: boolean) {
        setInputFocus(isFocus)
    }

    function handleKeyDown (e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            console.log(e.target.value, 'vv')
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
                <h2>热门搜索</h2>
                <ul>
                    <li>迪士尼Q2</li>
                    <li>日常元素</li>
                    <li>珀莱雅</li>
                    <li>真无线</li>
                    <li>漫步者</li>
                </ul>
            </div>
        </div>
    )
}

export default memo(Search)
