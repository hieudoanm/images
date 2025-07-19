import { APP_NAME } from '@images/constants';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<header className="w-full">
			<div className="container mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-4">
				<Link href="/">
					<h1 className="font-black">{APP_NAME}</h1>
				</Link>
			</div>
		</header>
	);
};
