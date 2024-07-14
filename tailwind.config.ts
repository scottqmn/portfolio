import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.zinc,
                accent: colors.sky,
            },
            fontFamily: {
                serif: 'var(--font-playfair-display)',
                mono: 'var(--font-source-code-pro)',
            },
        },
    },
    plugins: [],
};
export default config;
