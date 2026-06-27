'use client';

import clsx from 'clsx';
import { useIsPinned } from './useIsPinned';
import { useStageGap } from './useStageGap';

type PinnedStartProps = {
    children: React.ReactNode;
    className?: string;
};

/**
 * Content centered and pinned from the top. The outer wrapper is one viewport
 * tall plus the measured gap, so the sticky child releases exactly when the
 * content below reaches its bottom edge.
 *
 * Sets `data-pinned="true"` on the pinned element while it's centered, so styles
 * can react with a Tailwind variant, e.g. `data-[pinned=true]:bg-...`.
 */
export const PinnedStart = ({ children, className }: PinnedStartProps) => {
    const contentRef = useStageGap('--stage-gap');
    const { ref, isPinned } = useIsPinned('start');

    return (
        <div ref={ref} className='h-[calc(100dvh+var(--stage-gap,0px))]'>
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
