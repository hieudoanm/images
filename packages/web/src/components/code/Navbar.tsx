import { APP_NAME } from '@images/constants/app';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<header className="w-full">
			<div className="container mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
				<Link href="/">
					<h1 className="font-black">{APP_NAME}</h1>
				</Link>
				<nav className="space-x-4 text-sm font-medium md:text-base">
					<Link href="/qrcode" className="text-neutral-500 hover:text-white">
						QRCode
					</Link>
				</nav>
			</div>
		</header>
	);
};
