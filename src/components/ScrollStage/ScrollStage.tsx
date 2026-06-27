'use client';

import { useEffect, useRef } from 'react';
import { ScrollStageContext } from './context';

type ScrollStageRootProps = {
    children: React.ReactNode;
};

/**
 * Pins content in the vertical center of the viewport until the content below
 * scrolls up and collides with its bottom edge, then pushes it up and scrolls
 * normally.
 *
 * The pin, release and push are all native `position: sticky` behaviour — no
 * per-frame scroll handling. The root only measures the empty space below the
 * pinned content and exposes it as the `--stage-gap` CSS variable (recomputed
 * on resize and when the pinned content's size changes, e.g. a web-font swap).
 * `Pinned` and `Content` consume that variable to align the collision with the
 * pinned content's edge.
 *
 * @example
 * <ScrollStage>
 *     <ScrollStage.Pinned>
 *         <Hero />
 *     </ScrollStage.Pinned>
 *     <ScrollStage.Content>
 *         <SelectedWork />
 *     </ScrollStage.Content>
 * </ScrollStage>
 */
export const ScrollStageRoot = ({ children }: ScrollStageRootProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        const pinnedEl = pinnedRef.current;
        if (!root || !pinnedEl) return;

        const update = () => {
            const gap = Math.max(
                0,
                (window.innerHeight - pinnedEl.offsetHeight) / 2
            );
            root.style.setProperty('--stage-gap', `${gap}px`);
        };

        update();
        const observer = new ResizeObserver(update);
        observer.observe(pinnedEl);
        window.addEventListener('resize', update);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <ScrollStageContext.Provider value={{ pinnedRef }}>
            <div ref={rootRef}>{children}</div>
        </ScrollStageContext.Provider>
    );
};
