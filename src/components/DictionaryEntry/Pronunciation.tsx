'use client';

import { Howl } from 'howler';
import { useMemo } from 'react';
import { HiSpeakerWave } from 'react-icons/hi2';

type PronunciationProps = {
    text: string;
    src?: string;
};

export const Pronunciation: React.FC<PronunciationProps> = ({ text, src }) => {
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
            <div className='border-border flex w-fit items-center gap-2 rounded-full border px-2 py-1'>
                <span className='text-foreground font-mono'>{text}</span>
            </div>
        );
    }

    return (
        <button
            type='button'
            onClick={playPronunciation}
            aria-label='Play pronunciation'
            className='border-border flex w-fit items-center gap-2 rounded-full border py-1 pr-3 pl-2'
        >
            <span className='text-foreground font-mono'>{text}</span>
            <HiSpeakerWave className='text-foreground-muted' aria-hidden='true' />
        </button>
    );
};
