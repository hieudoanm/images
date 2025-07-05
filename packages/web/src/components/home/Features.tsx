import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Image Editor?</h3>
				<p className="mx-auto mt-4 max-w-2xl text-neutral-500">
					A fast, private, and intuitive image editor right in your browser. No uploads. No fuss. Just editing.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🛡️ Privacy-First</h4>
						<p className="mt-2 text-sm text-neutral-500">
							All image editing happens locally. Your photos never leave your device.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Fast & Lightweight</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Load and edit images instantly—no need to download heavy software or create an account.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🎨 Smart Tools</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Crop, blur, annotate, or draw with precision using an intuitive and modern interface.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
