'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { ScrollStageContext } from './context';

type ScrollStageRootProps = {
    children: React.ReactNode;
};

/**
 * Pins content in the vertical center of the viewport using native
 * `position: sticky` — no per-frame scroll handling.
 *
 * - `PinnedStart` holds content centered from the top, until the content below
 *   scrolls up, collides with its bottom edge, and pushes it away.
 * - `PinnedEnd` is the inverse: it starts inline and, as the content above
 *   scrolls past, catches in the center and stays there to the end.
 * - `Content` is everything in between.
 *
 * PinnedStart sections measure their height and expose the surrounding gap as a CSS
 * variable on the root (see {@link useStageGap}). The whole stage is hidden
 * until that first measurement lands, so a refresh while scrolled down doesn't
 * flash content positioned with the fallback gap.
 *
 * @example
 * <ScrollStage>
 *     <ScrollStage.PinnedStart>
 *         <Hero />
 *     </ScrollStage.PinnedStart>
 *     <ScrollStage.Content>
 *         <SelectedWork />
 *     </ScrollStage.Content>
 *     <ScrollStage.PinnedEnd>
 *         <Footer />
 *     </ScrollStage.PinnedEnd>
 * </ScrollStage>
 */
export const ScrollStageRoot = ({ children }: ScrollStageRootProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // PinnedStart children measure their gaps in their own effects, which run
        // before this one. Reveal on the next frame, once those measurements
        // have been applied and painted.
        const frame = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <ScrollStageContext.Provider value={{ rootRef }}>
            <div
                ref={rootRef}
                className={clsx(
                    'transition-opacity duration-500',
                    ready ? 'opacity-100' : 'opacity-0'
                )}
            >
                {children}
            </div>
        </ScrollStageContext.Provider>
    );
};
