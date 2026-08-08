'use client';

type ExampleSentencesProps = {
    items: string[];
};

export const ExampleSentences: React.FC<ExampleSentencesProps> = ({
    items,
}) => {
    const year = new Date().getFullYear();
    return (
        <ul className='text-foreground-muted space-y-2 font-mono'>
            {items.map((sentence, index) => {
                const formattedSentence = sentence.replaceAll(
                    '{{years}}',
                    `${year - 2017}`
                );
                return (
                    <li
                        key={index}
                        className='border-border border-l-2 py-0.5 pl-3.5'
                        dangerouslySetInnerHTML={{
                            __html: formattedSentence,
                        }}
                    />
                );
            })}
        </ul>
    );
};
