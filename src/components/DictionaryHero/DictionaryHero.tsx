'use client';

import { Pronunication } from '@/components/Pronunication';
import { definitions, sentences } from './constants';

export const DictionaryHero = () => {
    const year = new Date().getFullYear();
    return (
        <div className='mx-auto flex h-dvh max-w-xl flex-col justify-center gap-4 p-4'>
            <div className='flex items-end gap-3'>
                <h1 className='font-serif text-4xl text-primary-800 md:text-5xl'>
                    Scott Nguyen
                </h1>
                <a
                    href='https://github.com/scottqmn'
                    target='_blank'
                    rel='noreferrer'
                    className='font-serif text-2xl text-accent-600 hover:underline md:text-3xl'
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
            <ol className='list-inside list-decimal space-y-2 font-mono text-primary-800'>
                {definitions.map((definition, index) => {
                    return <li key={index}>{definition}</li>;
                })}
            </ol>
            <ul className='space-y-2 font-mono text-primary-500'>
                {sentences.map((sentence, index) => {
                    const formattedSentence = sentence.replaceAll(
                        '{{years}}',
                        `${year - 2017}`
                    );
                    return (
                        <li
                            key={index}
                            className='border-l-2 border-primary-300 py-0.5 pl-3.5'
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
