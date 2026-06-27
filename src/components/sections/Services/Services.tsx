import { DictionaryEntry } from '@/components/DictionaryEntry';
import { services } from './constants';

export const Services = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading word='Services' />
            <DictionaryEntry.Definitions items={services} />
        </DictionaryEntry>
    );
};
