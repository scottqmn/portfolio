import { DictionaryEntry } from '@/components/DictionaryEntry';
import { work } from './constants';

export const SelectedWork = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading word='Selected Work' />
            <DictionaryEntry.Definitions items={work} />
        </DictionaryEntry>
    );
};
