import dynamic from 'next/dynamic';

const QRCode = dynamic(() => import('@images/components/code/QRCode'), { ssr: false });

const QRCodePage = () => {
	return <QRCode />;
};

export default QRCodePage;
