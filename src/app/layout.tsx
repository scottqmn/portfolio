import clsx from 'clsx';
import type { Metadata } from 'next';
import { inter, playfairDisplay, sourceCodePro } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
    title: 'Scott Nguyen',
    description: 'a developer based in Los Angeles, CA',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={clsx(
                    'bg-primary-100 min-h-screen',
                    inter.variable,
                    playfairDisplay.variable,
                    sourceCodePro.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
