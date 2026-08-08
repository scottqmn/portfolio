import clsx from 'clsx';

type DictionaryEntryProps = {
    children: React.ReactNode;
    className?: string;
};

export const DictionaryEntryRoot: React.FC<DictionaryEntryProps> = ({
    children,
    className,
}) => {
    return (
        <section
            className={clsx(
                'mx-auto flex max-w-xl flex-col gap-4 p-4',
                className
            )}
        >
            {children}
        </section>
    );
};
