import { DictionaryEntry } from '@/components/DictionaryEntry';
import { definitions, sentences } from './constants';

export const Hero = () => {
    return (
        <DictionaryEntry className='h-dvh justify-center'>
            <DictionaryEntry.Heading
                as='h1'
                size='hero'
                word='Scott Nguyen'
                link={{
                    label: 'developer',
                    href: 'https://github.com/scottqmn',
                }}
            />
            <DictionaryEntry.Pronunciation
                text='skɒt n(ə)ˈwin'
                src='/audio/pronunciation.mp3'
            />
            <DictionaryEntry.Definitions items={definitions} />
            <DictionaryEntry.ExampleSentences items={sentences} />
        </DictionaryEntry>
    );
};
