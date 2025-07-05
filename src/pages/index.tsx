import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@images/components/home/Home'), { ssr: false });

const HomePage = () => {
	return <Home />;
};

export default HomePage;
