export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='text-foreground-muted mx-auto max-w-xl p-4 text-center font-mono text-sm'>
            © {year} Scott Nguyen
        </footer>
    );
};
