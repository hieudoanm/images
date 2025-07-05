import { APP_NAME } from '@images/constants';
import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => {
	return (
		<footer className="w-full border-t border-neutral-800 py-8">
			<div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm text-neutral-500 sm:flex-row md:gap-4 md:px-8 md:py-4">
				<p>
					© {new Date().getFullYear()} {APP_NAME}. All rights reserved.
				</p>
				<div className="space-x-4">
					<Link
						href="https://github.com/hieudoanm/redact"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline">
						GitHub
					</Link>
				</div>
			</div>
		</footer>
	);
};
