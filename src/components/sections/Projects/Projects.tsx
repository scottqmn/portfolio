import { DictionaryEntry } from '@/components/DictionaryEntry';
import { definitions, past, present } from './constants';

export const Projects = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading word='build' partOfSpeech='verb' />
            <DictionaryEntry.Pronunciation
                text='bɪld'
                src='/audio/pronunciation-build.mp3'
            />
            <DictionaryEntry.Definitions items={definitions} />

            <div className='flex flex-col gap-2'>
                <DictionaryEntry.Heading
                    as='h3'
                    size='subentry'
                    word='builds'
                    label='present'
                />
                <DictionaryEntry.ExampleSentences items={present} />
            </div>

            <div className='flex flex-col gap-2'>
                <DictionaryEntry.Heading
                    as='h3'
                    size='subentry'
                    word='built'
                    label='past'
                />
                <DictionaryEntry.ExampleSentences items={past} />
            </div>
        </DictionaryEntry>
    );
};
