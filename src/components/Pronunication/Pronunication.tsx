'use client';

import { Howl } from 'howler';
import { useMemo } from 'react';
import { HiSpeakerWave } from 'react-icons/hi2';

type PronunciationProps = {
    text: string;
    src?: string;
};

export const Pronunication: React.FC<PronunciationProps> = ({ text, src }) => {
    const pronunciation = useMemo<Howl | undefined>(
        () => (src ? new Howl({ src }) : undefined),
        [src]
    );

    const playPronunciation = () => {
        if (!pronunciation || pronunciation.playing()) return;
        pronunciation.play();
    };

    if (!src) {
        return (
            <div className='border-primary-300 flex items-center gap-2 rounded-full border px-2 py-1'>
                <span className='text-primary-800 font-mono'>{text}</span>
            </div>
        );
    }

    return (
        <button
            type='button'
            onClick={playPronunciation}
            aria-label='Play pronunciation'
            className='border-primary-300 flex items-center gap-2 rounded-full border py-1 pl-2 pr-3'
        >
            <span className='text-primary-800 font-mono'>{text}</span>
            <HiSpeakerWave className='text-primary-500' aria-hidden='true' />
        </button>
    );
};
