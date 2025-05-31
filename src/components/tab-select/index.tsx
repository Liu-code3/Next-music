import {FC, ReactNode} from 'react';
import {memo,  useState} from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

interface IProps {
    children?: ReactNode;
    selectsData?: any[];
    onItemClick: (item: any) => void
}

/*
 * 组件名: index
 * 创建日期: 2025/5/31 18:50
 * 编写者: ls
 */
const TabSelect: FC<IProps> = (props) => {
    const {selectsData, onItemClick} = props;

    const [currentIndex, setCurrentIndex] = useState(0);


    function handleItemClick (item: any, index:  number) {
      setCurrentIndex(index);
      onItemClick(item)
    }

    return (
        <div className={styles["tab-select"]}>
          { selectsData?.map((item, index) => {
            return (
                <div
                  key={item.id}
                  className={classNames(
                      styles["select-item"],
                      currentIndex === index ? styles.active : ""
                  )}
                  onClick={() => handleItemClick(item, index)}
                >
                  { index === 0 ? (
                      <>
                        <span  className={styles.name}>{item.name}</span>
                      </>
                  ) : (
                      <>
                        <i className={styles.dot}>.</i>
                        <span className={styles.name}>{item.name}</span>
                      </>
                  )
                  }
                </div>
            )
          })}
        </div>
    );
};

export default memo(TabSelect);

