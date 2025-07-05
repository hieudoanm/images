import type { NextConfig } from 'next';

const NODE_ENV: 'development' | 'production' | 'test' = process.env.NODE_ENV ?? 'development';

const nextConfig: NextConfig = {
	/* config options here */
	trailingSlash: true,
	reactStrictMode: true,
	basePath: NODE_ENV === 'development' ? '' : '/images',
	output: NODE_ENV === 'development' ? 'standalone' : 'export',
	distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
	webpack: (config) => {
		config.experiments = {
			layers: true,
			asyncWebAssembly: true,
			topLevelAwait: true,
		};
		return config;
	},
};

export default nextConfig;
