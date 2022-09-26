import './App.css';
import Report from './page/Report';
import UserInterface from './page/UserInterface';
import styled from 'styled-components';

function App() {
	function onPrint() {
		window.print();
	}
	return (
		<>
			<DoNotPrint>
				<UserInterface onPrint={onPrint} />
			</DoNotPrint>
			<DoPrint>
				<Report />
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
