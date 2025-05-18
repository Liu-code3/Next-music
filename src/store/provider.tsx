"use client";
import type { FC, ReactNode } from "react";
import { useRef, memo } from 'react';
import { Provider } from "react-redux";
import { makeStore } from "@/store/index";

interface IProps {
  children?: ReactNode;
}

const ReduxProvider: FC<IProps> = (props) => {
    const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);
    if(!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{props.children || ''}</Provider>
}

export default memo(ReduxProvider)
