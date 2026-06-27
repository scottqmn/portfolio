import { DictionaryEntry } from '@/components/DictionaryEntry';
import { testimonials } from './constants';

export const Testimonials = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading word='In the Wild' />
            <DictionaryEntry.ExampleSentences items={testimonials} />
        </DictionaryEntry>
    );
};
