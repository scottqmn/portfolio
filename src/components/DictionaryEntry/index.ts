import { Definitions } from './Definitions';
import { DictionaryEntryRoot } from './DictionaryEntry';
import { ExampleSentences } from './ExampleSentences';
import { Heading } from './Heading';
import { Pronunciation } from './Pronunciation';

export const DictionaryEntry = Object.assign(DictionaryEntryRoot, {
    Heading,
    Pronunciation,
    Definitions,
    ExampleSentences,
});
