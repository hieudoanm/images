import { download } from '@images/utils/download';
import { base64, filter, getMimeType, png2ico, png2jpg, svg2png } from '@images/utils/image';
import { FC, useState } from 'react';
import { Features } from './Features';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { LinearBackground, LinearText } from '../shared/Linear';
import { APP_NAME } from '@images/constants';

const Home: FC = () => {
	const [{ originalBase64 = '', filteredBase64 = '', file = null }, setState] = useState<{
		originalBase64: string;
		filteredBase64: string;
		file: File | null;
	}>({
		originalBase64: '',
		filteredBase64: '',
		file: null,
	});

	const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const originalBase64: string = await base64(file);
			setState((previous) => ({ ...previous, originalBase64, filteredBase64: '', file }));
		}
	};

	return (
		<>
			<LinearBackground />
			<div className="relative z-10">
				{/* Navbar */}
				<Navbar />
				{/* Divider */}
				<div className="w-full border-t border-neutral-800" />
				{/* Hero Section */}
				<section className="w-full py-20">
					<div className="mx-auto flex max-w-3xl flex-col gap-y-4 text-center md:gap-y-8">
						<h2 className="text-4xl font-extrabold text-neutral-100 sm:text-5xl">
							<LinearText>{APP_NAME}</LinearText>
						</h2>
						<p className="text-lg text-neutral-100">
							Upload and edit your images directly in the browser—crop, draw, blur, and more with full privacy.
						</p>
						<div className="flex justify-center gap-4">
							<label className="inline-block cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3">
								<span>Upload Image</span>
								<input type="file" accept="image/*" onChange={handleFile} className="hidden" />
							</label>
							{getMimeType(filteredBase64 || originalBase64)?.includes('png') && (
								<button
									onClick={async () => {
										const content = await png2ico(filteredBase64 || originalBase64);
										download({ content, format: 'ico', filename: 'favicon' }).image();
									}}
									className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 transition">
									Export as ICO
								</button>
							)}
							{getMimeType(filteredBase64 || originalBase64)?.includes('png') && (
								<button
									onClick={async () => {
										const content = await png2jpg(filteredBase64 || originalBase64);
										download({ content, format: 'jpg', filename: 'image' }).image();
									}}
									className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 transition">
									Export as JPG
								</button>
							)}
							{getMimeType(filteredBase64 || originalBase64)?.includes('svg') && (
								<button
									onClick={async () => {
										const content = await svg2png(filteredBase64 || originalBase64);
										download({ content, format: 'png', filename: 'image' }).image();
									}}
									className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 transition">
									Export as PNG
								</button>
							)}
						</div>
					</div>
				</section>
				{/* Divider */}
				<div className="w-full border-t border-neutral-800" />
				{!file && (
					<>
						{/* Features */}
						<Features />
						{/* Divider */}
						<div className="w-full border-t border-neutral-800" />
						{/* Call to Action */}
						<section className="w-full py-16">
							<div className="mx-auto max-w-3xl px-6 text-center">
								<h3 className="text-2xl font-bold sm:text-3xl">Ready to edit your image?</h3>
								<p className="mt-4 text-neutral-500">
									Upload your image and start editing instantly — no sign-up, no server, 100% local and private.
								</p>
								<label className="mt-6 inline-block cursor-pointer rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3">
									<span>Upload Image</span>
									<input type="file" accept="image/*" onChange={handleFile} className="hidden" />
								</label>
							</div>
						</section>
					</>
				)}
				{/* Main */}
				{file && (
					<div className="container mx-auto flex flex-col gap-y-8 p-8">
						<div className="flex flex-col gap-y-8">
							<div className="grid grid-cols-2 gap-8">
								<button
									type="button"
									onClick={async () => {
										const filteredBase64: string = await filter('golden', originalBase64);
										setState((previous) => ({ ...previous, filteredBase64: filteredBase64 }));
									}}
									className="w-full cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-neutral-900">
									Filter - Golden
								</button>
								<button
									type="button"
									onClick={async () => {
										const filteredBase64: string = await filter('grayscale', originalBase64);
										setState((previous) => ({ ...previous, filteredBase64: filteredBase64 }));
									}}
									className="w-full cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-neutral-900">
									Filter - Grayscale
								</button>
							</div>
						</div>
						<div
							className="h-64 bg-contain bg-center bg-no-repeat md:h-128"
							style={{ backgroundImage: `url(${filteredBase64 || originalBase64})` }}></div>
					</div>
				)}
				{/* Footer */}
				<Footer />
			</div>
		</>
	);
};

export default Home;
