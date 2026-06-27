import { DictionaryEntry } from '@/components/DictionaryEntry';
import { about } from './constants';

export const AboutNow = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading word='About' />
            <DictionaryEntry.Definitions items={about} />
        </DictionaryEntry>
    );
};
