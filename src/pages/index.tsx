import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@images/components/Home'), { ssr: false });

const HomePage = () => {
	return <Home />;
};

export default HomePage;
