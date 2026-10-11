import '../styles/globals.css';
import { content } from '../content';

export const metadata = {
    title: `Happy Birthday, ${content.herName} ♡`,
    description: `A little corner of the internet, made just for ${content.herName}.`
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
