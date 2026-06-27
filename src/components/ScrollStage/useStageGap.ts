'use client';

import { useEffect, useRef } from 'react';
import { useScrollStage } from './context';

/**
 * Measures the rendered height of the ref'd element and writes the surrounding
 * empty space — half the leftover viewport — to `varName` on the stage root.
 * Siblings consume that variable to align their collision with the pinned
 * content's edge rather than the full-height wrapper. Recomputed on resize and
 * when the content's size changes (e.g. a web-font swap).
 */
export const useStageGap = (varName: string) => {
    const { rootRef } = useScrollStage();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        const content = contentRef.current;
        if (!root || !content) return;

        const update = () => {
            const gap = Math.max(
                0,
                (window.innerHeight - content.offsetHeight) / 2
            );
            root.style.setProperty(varName, `${gap}px`);
        };

        update();
        const observer = new ResizeObserver(update);
        observer.observe(content);
        window.addEventListener('resize', update);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', update);
        };
    }, [rootRef, varName]);

    return contentRef;
};
