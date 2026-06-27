import { DictionaryEntry } from '@/components/DictionaryEntry';
import { contact } from './constants';

export const Contact = () => {
    return (
        <DictionaryEntry>
            <DictionaryEntry.Heading
                word='Contact'
                link={{ label: 'available', href: 'mailto:scottqmn@gmail.com' }}
            />
            <DictionaryEntry.Definitions
                items={contact.map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='text-accent-600 hover:underline'
                    >
                        {label}
                    </a>
                ))}
            />
        </DictionaryEntry>
    );
};
