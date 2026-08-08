'use client';

import clsx from 'clsx';
import { useIsPinned } from './useIsPinned';
import { useStageGap } from './useStageGap';

type PinnedEndProps = {
    children: React.ReactNode;
    className?: string;
};

/**
 * The inverse of {@link PinnedStart}: content that starts inline and, as the content
 * above scrolls past, catches in the vertical center and stays pinned there
 * through the end of the page.
 *
 * Same full-height `sticky top-0` child as `PinnedStart` (when stuck it fills the
 * viewport, so the content centers identically) — it just sits later in the
 * document, so it pins later. The wrapper is pulled up by the measured gap so
 * the content above collides with the pinned content's top edge instead of the
 * empty space above it.
 *
 * Sets `data-pinned="true"` on the pinned element while it's centered, so styles
 * can react with a Tailwind variant, e.g. `data-[pinned=true]:bg-...`.
 */
export const PinnedEnd = ({ children, className }: PinnedEndProps) => {
    const contentRef = useStageGap('--stage-gap-end');
    const { ref, isPinned } = useIsPinned('end');

    return (
        <div
            ref={ref}
            className='-mt-(--stage-gap-end,0px) h-[calc(100dvh+var(--stage-gap-end,0px))]'
        >
            <div
                data-pinned={isPinned}
                className={clsx(
                    'sticky top-0 flex h-dvh items-center justify-center',
                    className
                )}
            >
                <div ref={contentRef} className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    );
};
