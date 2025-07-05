import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our QR Code Generator?</h3>
				<p className="mx-auto mt-4 max-w-2xl text-neutral-500">
					Create QR codes instantly in your browser. No sign-ups. No tracking. Just fast and secure code generation.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 Secure & Private</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Everything runs locally in your browser. Your data stays on your device—nothing is ever sent to a server.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Instant Generation</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Generate high-quality QR codes in real time without downloads or delays.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🎯 Customizable Output</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Customize colors, size, error correction levels, and more to fit your exact needs.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
