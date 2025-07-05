import { download } from '@images/utils/download';
import { toDataURL } from 'qrcode';
import { FC, useState } from 'react';
import { Features } from './Features';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const QRCode: FC = () => {
	const [{ dataURL = '', url = 'https://google.com' }, setState] = useState<{
		dataURL: string;
		url: string;
	}>({
		dataURL: '',
		url: 'https://google.com',
	});

	const generate = async () => {
		const dataURL = await toDataURL(url, {
			errorCorrectionLevel: 'H',
			type: 'image/jpeg',
			width: 512,
			margin: 1,
			color: {
				dark: '#F5F5F5', // QR code dots (white)
				light: '#171717', // Background (black)
			},
		});
		setState((previous) => ({ ...previous, dataURL }));
	};

	return (
		<>
			{/* Navbar */}
			<Navbar />
			{/* Divider */}
			<div className="w-full border-t border-neutral-800" />
			{/* Hero Section */}
			<section className="w-full py-20">
				<div className="mx-auto flex max-w-3xl flex-col gap-y-8 px-4 text-center sm:px-6">
					<h2 className="text-4xl font-extrabold sm:text-5xl">Edit Images with Ease</h2>
					<p className="text-lg text-neutral-500">
						Upload and edit your images directly in the browser—crop, draw, blur, and more with full privacy.
					</p>
					<div className="flex w-full justify-center gap-4 gap-x-4 rounded-full bg-neutral-100 px-4 py-2 text-neutral-900">
						<input id="url" name="url" placeholder="URL" className="grow" value={url} />
						<button
							type="button"
							className="cursor-pointer"
							onClick={() => {
								generate();
							}}>
							Generate
						</button>
					</div>
				</div>
			</section>
			{/* Divider */}
			<div className="w-full border-t border-neutral-800" />
			{!dataURL && (
				<>
					{/* Features */}
					<Features />
					{/* Divider */}
					<div className="w-full border-t border-neutral-800" />
					{/* Call to Action */}
					<section className="w-full py-16">
						<div className="mx-auto max-w-3xl px-6 text-center">
							<h3 className="text-2xl font-bold sm:text-3xl">Ready to generate your QR code?</h3>
							<p className="mt-4 text-neutral-500">
								Enter your content and generate a QR code instantly — no sign-up, no server, 100% local and private.
							</p>
						</div>
					</section>
				</>
			)}
			{/* Main */}
			{dataURL && (
				<div className="mx-auto flex w-full max-w-3xl flex-col gap-y-8 p-8">
					<button
						type="button"
						className="cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-neutral-900"
						onClick={() => {
							download({ content: dataURL, format: 'jpg', filename: 'qrcode' }).image();
						}}>
						Download
					</button>
					<div
						className="aspect-square w-full overflow-hidden rounded-2xl border border-neutral-800 bg-contain bg-center bg-no-repeat"
						style={{ backgroundImage: `url(${dataURL})` }}></div>
				</div>
			)}
			{/* Footer */}
			<Footer />
		</>
	);
};

export default QRCode;
