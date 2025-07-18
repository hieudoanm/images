import '@images/styles/globals.css';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Images</title>
			</Head>
			<div className={`${geistSans.className} ${geistMono.className}`}>
				<div className="bg-neutral-900 text-neutral-100">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
};

export default App;
