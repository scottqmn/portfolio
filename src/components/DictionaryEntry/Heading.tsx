import { cva, type VariantProps } from 'class-variance-authority';

const heading = cva('text-primary-800 font-serif', {
    variants: {
        size: {
            hero: 'text-4xl md:text-5xl',
            section: 'text-2xl md:text-3xl',
        },
    },
    defaultVariants: {
        size: 'section',
    },
});

const link = cva('text-accent-600 font-serif hover:underline', {
    variants: {
        size: {
            hero: 'text-2xl md:text-3xl',
            section: 'text-lg md:text-xl',
        },
    },
    defaultVariants: {
        size: 'section',
    },
});

type HeadingProps = VariantProps<typeof heading> & {
    word: string;
    as?: 'h1' | 'h2';
    link?: { label: string; href: string };
};

export const Heading: React.FC<HeadingProps> = ({
    word,
    as: Tag = 'h2',
    link: linkProp,
    size,
}) => {
    return (
        <div className='flex items-end gap-3'>
            <Tag className={heading({ size })}>{word}</Tag>
            {linkProp && (
                <a
                    href={linkProp.href}
                    target='_blank'
                    rel='noreferrer'
                    className={link({ size })}
                >
                    {linkProp.label}
                </a>
            )}
        </div>
    );
};
