import { DictionaryEntry } from '@/components/DictionaryEntry';
import { skills } from './constants';

export const Skills = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading
                word='Skills'
                link={{ label: 'syn.', href: '#' }}
            />
            <DictionaryEntry.Definitions items={skills} />
        </DictionaryEntry>
    );
};
