'use client';

import clsx from 'clsx';

type ContentProps = {
    children: React.ReactNode;
    className?: string;
};

/**
 * Everything below the pinned content. Pulled up by the measured gap so it
 * collides with the pinned content's bottom edge instead of the empty space
 * beneath it. An opaque background keeps the pinned content from showing
 * through as it scrolls past.
 */
export const Content = ({ children, className }: ContentProps) => {
    return (
        <div
            className={clsx('bg-primary-100 relative', className)}
            style={{ marginTop: 'calc(-1 * var(--stage-gap, 50dvh))' }}
        >
            {children}
        </div>
    );
};
