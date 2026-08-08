import { cva, type VariantProps } from 'class-variance-authority';
import { Label } from './Label';

const heading = cva('text-foreground font-serif', {
    variants: {
        size: {
            hero: 'text-4xl md:text-5xl',
            section: 'text-2xl md:text-3xl',
            subentry: 'text-xl md:text-2xl',
        },
    },
    defaultVariants: {
        size: 'section',
    },
});

const link = cva('text-accent font-serif hover:underline', {
    variants: {
        size: {
            hero: 'text-2xl md:text-3xl',
            section: 'text-lg md:text-xl',
            subentry: 'text-base md:text-lg',
        },
    },
    defaultVariants: {
        size: 'section',
    },
});

const partOfSpeech = cva('text-foreground-muted font-serif italic', {
    variants: {
        size: {
            hero: 'text-2xl md:text-3xl',
            section: 'text-lg md:text-xl',
            subentry: 'text-base md:text-lg',
        },
    },
    defaultVariants: {
        size: 'section',
    },
});

type HeadingProps = VariantProps<typeof heading> & {
    word: string;
    as?: 'h1' | 'h2' | 'h3';
    /** Dictionary part of speech, e.g. `noun`, `verb`. Rendered in italics. */
    partOfSpeech?: string;
    /** Grammar label for an inflected form, e.g. `past tense`. Rendered as a tag. */
    label?: string;
    link?: { label: string; href: string };
};

export const Heading: React.FC<HeadingProps> = ({
    word,
    as: Tag = 'h2',
    partOfSpeech: partOfSpeechProp,
    label,
    link: linkProp,
    size,
}) => {
    return (
        <div className='flex items-end gap-3'>
            <Tag className={heading({ size })}>{word}</Tag>
            {partOfSpeechProp && (
                <span className={partOfSpeech({ size })}>
                    {partOfSpeechProp}
                </span>
            )}
            {label && <Label>{label}</Label>}
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
