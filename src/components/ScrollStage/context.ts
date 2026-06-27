'use client';

import { createContext, useContext, type RefObject } from 'react';

type ScrollStageContextValue = {
    /** Attached to the element whose height defines the pinned content. */
    pinnedRef: RefObject<HTMLDivElement | null>;
};

export const ScrollStageContext = createContext<ScrollStageContextValue | null>(
    null
);

export const useScrollStage = () => {
    const context = useContext(ScrollStageContext);
    if (!context) {
        throw new Error(
            'ScrollStage.Pinned and ScrollStage.Content must be used within <ScrollStage>'
        );
    }
    return context;
};
