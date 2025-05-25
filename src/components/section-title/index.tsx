import {memo} from 'react';
import type { FC, ReactNode } from 'react';
import styles from './index.module.scss'

interface IProps {
    title: string;
    children: ReactNode;
}

const SectionTitle: FC<Partial<IProps>> = (props) => {
    const { title } = props;
    return (
        <div className={styles['section-title']}>{title}</div>
    )
}

export default memo(SectionTitle)
