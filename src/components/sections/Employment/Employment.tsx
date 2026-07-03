import { DictionaryEntry } from '@/components/DictionaryEntry';
import { definitions, past, present } from './constants';

export const Employment = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading word='work' partOfSpeech='verb' />
            <DictionaryEntry.Pronunciation
                text='wɜrk'
                src='/audio/pronunciation-work.mp3'
            />
            <DictionaryEntry.Definitions items={definitions} />

            <div className='flex flex-col gap-2'>
                <DictionaryEntry.Heading
                    as='h3'
                    size='subentry'
                    word='works'
                    label='present'
                />
                <DictionaryEntry.ExampleSentences items={present} />
            </div>

            <div className='flex flex-col gap-2'>
                <DictionaryEntry.Heading
                    as='h3'
                    size='subentry'
                    word='worked'
                    label='past'
                />
                <DictionaryEntry.ExampleSentences items={past} />
            </div>
        </DictionaryEntry>
    );
};
