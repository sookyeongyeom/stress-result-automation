import './App.css';
import Report from './page/Report';
import UserInterface from './page/UserInterface';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function App() {
	const [excelData, setExcelData] = useState('');
	const [isReady, setIsReady] = useState(false);
	function onPrint(excelData: string) {
		setIsReady(false);
		setExcelData(excelData);
	}
	function pressReady() {
		setIsReady(true);
	}
	function printThis() {
		window.print();
		setExcelData('');
	}
	useEffect(() => {
		console.log(isReady);
		/* 0.5초 추가대기 */
		if (isReady)
			setTimeout(() => {
				printThis();
			}, 500);
	}, [isReady]);
	return (
		<>
			<DoNotPrint>
				<UserInterface onPrint={onPrint} />
			</DoNotPrint>
			<DoPrint>
				<Report excelData={excelData} pressReady={pressReady} />
			</DoPrint>
		</>
	);
}

const DoNotPrint = styled.div`
	@media print {
		display: none;
	}
`;

const DoPrint = styled.div`
	display: none;

	@media print {
		display: block;
	}
`;

export default App;
