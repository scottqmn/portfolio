'use client';

import { createContext, useContext, type RefObject } from 'react';

type ScrollStageContextValue = {
    /** The stage root; pinned sections write their measured gap variables here. */
    rootRef: RefObject<HTMLDivElement | null>;
};

export const ScrollStageContext = createContext<ScrollStageContextValue | null>(
    null
);

export const useScrollStage = () => {
    const context = useContext(ScrollStageContext);
    if (!context) {
        throw new Error(
            'ScrollStage.PinnedStart, ScrollStage.PinnedEnd and ScrollStage.Content must be used within <ScrollStage>'
        );
    }
    return context;
};
