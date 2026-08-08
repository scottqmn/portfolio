type LabelProps = {
    children: React.ReactNode;
};

/**
 * A small grammar label for an inflected form of the headword, e.g. the
 * `present tense` / `past tense` tags beside a {@link Heading} sub-entry.
 * Styled as a muted monospace tag to sit apart from the serif part-of-speech.
 */
export const Label: React.FC<LabelProps> = ({ children }) => {
    return (
        <span className='text-foreground-muted font-mono text-sm font-semibold'>
            {children}
        </span>
    );
};
