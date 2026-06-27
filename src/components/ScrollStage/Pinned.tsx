'use client';

import clsx from 'clsx';
import { useScrollStage } from './context';

type PinnedProps = {
    children: React.ReactNode;
    className?: string;
};

/**
 * The centered, pinned content. The outer wrapper is one viewport tall plus the
 * measured gap, so the sticky child releases exactly when the content below
 * reaches its bottom edge.
 */
export const Pinned = ({ children, className }: PinnedProps) => {
    const { pinnedRef } = useScrollStage();

    return (
        <div style={{ height: 'calc(100dvh + var(--stage-gap, 50dvh))' }}>
            <div
                className={clsx(
                    'sticky top-0 flex h-dvh items-center justify-center',
                    className
                )}
            >
                <div ref={pinnedRef}>{children}</div>
            </div>
        </div>
    );
};
