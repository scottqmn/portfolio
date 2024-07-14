'use client';

import { Pronunication } from '@/components/Pronunication';
import { definitions, sentences } from './constants';

export const DictionaryHero = () => {
    return (
        <div className='mx-auto flex h-dvh w-max max-w-xl flex-col justify-center gap-4 p-6'>
            <div className='flex items-end gap-3'>
                <h1 className='text-primary-800 font-serif text-4xl md:text-5xl'>
                    Scott Nguyen
                </h1>
                <a
                    href='https://github.com/scottqmn'
                    target='_blank'
                    rel='noreferrer'
                    className='text-accent-600 font-serif text-2xl hover:underline md:text-3xl'
                >
                    developer
                </a>
            </div>
            <div>
                <Pronunication
                    text='skɒt n(ə)ˈwin'
                    src='/audio/pronunciation.mp3'
                />
            </div>
            <ol className='text-primary-800 list-inside list-decimal space-y-2 font-mono'>
                {definitions.map((definition, index) => {
                    return <li key={index}>{definition}</li>;
                })}
            </ol>
            <ul className='text-primary-500 space-y-2 font-mono'>
                {sentences.map((sentence, index) => {
                    const formattedSentence = sentence.replaceAll(
                        '{{years}}',
                        `${new Date().getFullYear() - 2017}`
                    );
                    return (
                        <li
                            key={index}
                            className='border-primary-300 border-l-2 py-0.5 pl-3.5'
                            dangerouslySetInnerHTML={{
                                __html: formattedSentence,
                            }}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
