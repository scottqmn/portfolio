type DefinitionsProps = {
    items: React.ReactNode[];
};

export const Definitions: React.FC<DefinitionsProps> = ({ items }) => {
    return (
        <ol className='text-foreground list-inside list-decimal space-y-2 font-mono'>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
        </ol>
    );
};
