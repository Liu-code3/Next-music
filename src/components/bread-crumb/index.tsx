import type {FC, ReactNode} from 'react';
import {memo} from "react";
import styles from "./index.module.scss";
import Link from "next/link";

interface IProps {
    children?: ReactNode;
    links?: any[];
}

/*
 * 组件名: index
 * 创建日期: 2025/5/31 18:05
 * 编写者: ls
 */
const BreadCrumb: FC<IProps> = (props) => {
    const { links = [] } = props;

    if(!links || !links.length) {
      return <div className={styles['bread-crumb']}>
        暂无数据
      </div>;
    }

    return (
        <div className={styles['bread-crumb']}>
          {
            links.map((item, index) => {
              return  (
                  <div key={item.id} className={styles['crumb-item']}>
                    {index === 0 ? (
                        <>
                          <Link href={item.link} className={styles.name}>
                            {item.name}
                          </Link>
                        </>
                    ) : (
                        <>
                          <i className={styles.arrow}></i>
                          <span className={styles['sub-name']}>{item.name}</span>
                        </>
                    )
                    }
                  </div>
              )
            })
          }
        </div>
    );
};

export default memo(BreadCrumb);

