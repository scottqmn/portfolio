'use client';

import { useEffect, useRef, useState } from 'react';

// Slack (px) for landing on the scroll extreme despite sub-pixel rounding.
const TOLERANCE = 4;

/**
 * Reports whether a pinned section has settled alone at its scroll extreme — the
 * top of the page for `'start'`, the bottom for `'end'`. That's the point where
 * nothing else shares the viewport with it, rather than the whole sticky dwell
 * (during which adjacent content is still scrolling past).
 *
 * A single rAF-throttled scroll read; setState bails out when the boolean is
 * unchanged, so it only re-renders on the settle/unsettle transitions.
 */
export const useIsPinned = (edge: 'start' | 'end') => {
    const ref = useRef<HTMLDivElement>(null);
    const [isPinned, setIsPinned] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const rect = el.getBoundingClientRect();
            const settled =
                edge === 'start'
                    ? rect.top >= -TOLERANCE
                    : rect.bottom <= window.innerHeight + TOLERANCE;
            setIsPinned(settled);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', update);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [edge]);

    return { ref, isPinned };
};
